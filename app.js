const path = require('path');
const express = require("express");
const db = process.env.DB_URI || require('./config/keys').mongoURI;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const meals = require("./routes/api/meals");
const children = require("./routes/api/children");
const selectedMeals = require("./routes/api/selected_meals");
const admin = require('./routes/api/admin');

mongoose
    .connect(db, { useNewUrlParser: true, auto_reconnect: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
} else {
    app.get("/", (req, res) => res.send("Hello World!!"));
}

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/meals", meals);
app.use("/api/children", children);
app.use("/api/selected-meals", selectedMeals)
app.use("/api/admin", admin);


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
