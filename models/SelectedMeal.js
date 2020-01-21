const mongoose = require("mongoose");
const Schema = mongoose.schema;

const SingleSelectedMeal = new Schema ({
    meal: {
        type: Schema.Types.ObjectId,
        ref: "meals"
    },

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
})
const SelectedMeal = new Schema ({

    child: {
        type: Schema.Types.ObjectId,
        ref: 'chidren'
    },
    meals: {
        type: [SingleSelectedMeal],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = SelectedMeal = mongoose.model('selectedMeals', SelectedMeal);