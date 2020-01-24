const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
const secretOrKey = process.env.SECRET_OR_KEY || require('../../config/keys').secretOrKey;
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');



router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

//router.get('/current', passport.authenticate('jwt', { session: false }), async(req, res) => {
router.get('/:user_id', async(req, res) => {
    //let childs = await Child.find({ user: req.user.id});
    let user = await User.findById(req.params.user_id)
    let childs = await Child.find({ user: req.params.user_id}).lean();
    for (let child of childs) {
        let selectedMeal = await SelectedMeal.findOne({ child: child._id }).lean();
        child.selectedMeal = selectedMeal;
        if(selectedMeal){
            for (let selectedSingleMeal of selectedMeal.meals){
                let meal = await Meal.findById(selectedSingleMeal.meal).lean();
                selectedSingleMeal.meal_relation = meal;
            }
        }
    }

    res.status(200).json({
        id: user.id,
        handle: user.handle,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        childs,
    });
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(errors);
    // debugger;
    if (!isValid) {
        return res.status(400).json(errors);

    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password,
                    // category: req.body.category,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName

                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})


router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    console.log(errors);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name };

                        jwt.sign(
                            payload,
                            secretOrKey,
                            // Tell the key to expire in one hour
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        res.status(400).json({ password: 'Incorrect password' });
                        return;
                    }
                })
        })
})



router.post("/profile", passport.authenticate('jwt', { session: false }),(req, res) => {


    // if (req.body.category){
    //     req.user.category = req.body.category;
    // }
    if (req.body.firstName){
        req.user.firstName = req.body.firstName;
    }
    if (req.body.lastName){
        req.user.lastName = req.body.lastName;
    }

    req.user.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));

})
router.delete("/profile", passport.authenticate('jwt', { session: false }),(req, res) => {
    return req.user.delete()
        .then(user => res.json(user))
        .catch(err => console.log(err));

})



module.exports = router;