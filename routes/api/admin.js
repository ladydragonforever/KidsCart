const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meal = require('../../models/Meal');
const Child = require('../../models/Child');
const passport = require('passport');

router.get("/seed", async (req, res)=>{

    const password_digest = "$2a$10$jjDnk0HSqgl2fEUsYdnnbOv7EqWVH.UJQoOYdWU9xmN.Cu.JGa/1y";

    const users = await Promise.all([
        {
            handle: "userA", 
            email: "userA@google.com",
            password: password_digest,
            firstName: "usera",
            lastName: "a"
        }
    ].map(u => new User(u).save()));

    const childs = await Promise.all([
        {
         user: users[0].id,
         name: "Francis",
         age: 3,
         category: ["Chinese", "American"],
         ingredient: ["Rice", "Bacon", "Salami"]
        }
    ].map(c => new Child(c).save()));

    const meals = await Promise.all([
        {
            title: "Candy",
            category: "American",
            ingredients: "Sugar, a lot of it.",
            photoUrl: "https://images.app.goo.gl/G1vgJudyTAHjYHN59",
            cookingInstruction: "Put sugar in a bowl and call it Bacon"
        },
        {
            title: "Oreo",
            category: "American",
            ingredients: "Oreo.",
            photoUrl: "https://images.app.goo.gl/RjHbf2gD7UWsQ2YG9",
            cookingInstruction: "No instructions"
        },
        {
            title: "Pi",
            category: "American",
            ingredients: "Salami",
            photoUrl: "https://images.app.goo.gl/ahgWcmsMii4iyotX7",
            cookingInstruction: "Cut a slice of salami, it's like a small meat pie."
        },
        {
            title: "ChowFan",
            category: "Chinese",
            ingredients: "Rice, peas, corns",
            photoUrl: "https://images.app.goo.gl/4sK4qJ1EZL8JbYV58",
            cookingInstruction: "Stir fry all the ingredients with hot temperature"
        }
    ].map(m => new Meal(m).save()));

    const selectedMeals = await Promise.all([
        {
            child: childs[0].id,
            meals: [{
                meal: meals[0].id,
                title: "Candy with added sugar",
                category: "Bacon",
                ingredients: "Double the amount of sugar"
            }]
        }
    ].map(sm => new SelectedMeal(sm).save()));

    res.status(200).json({
        users,
        childs,
        meals,
        selectedMeals,
    });
});

/*
router.get("/clear_db", async (req, res)=>{
    const collections = await mongoose.connection.db.collections()

    const names = collections.map(c => c.collectionName);

    for (let collection of collections) {
        await collection.drop()
    }

    res.status(200).json({collections_dropped: names});
});
*/

module.exports = router