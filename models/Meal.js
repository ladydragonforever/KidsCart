const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    cookingInstruction: {
        type: String,
        required: true
    }
})

module.exports = Meal = mongoose.model("meals", MealSchema)