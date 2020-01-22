const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SingleSelectedMealSchema = new Schema ({
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
const SelectedMealSchema = new Schema ({

    child: {
        type: Schema.Types.ObjectId,
        ref: 'chidren'
    },
    meals: {
        type: [SingleSelectedMealSchema],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = SelectedMeal = mongoose.model('selectedMeals', SelectedMealSchema);