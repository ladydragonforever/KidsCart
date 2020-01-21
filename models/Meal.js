const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    ingredients: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: false
    },
    cookingInstruction: {
        type: String,
        required: false
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: false
    }
    
})

module.exports = Meal = mongoose.model("meals", MealSchema)