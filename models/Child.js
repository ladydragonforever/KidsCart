const mongoose = require("mongoose");
const Schema = mongoose.schema;

const Child = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }

})


module.exports = Meal = mongoose.model("children", Child)