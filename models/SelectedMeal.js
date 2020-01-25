const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SingleSelectedMealSchema = new Schema ({
    meal: {
        type: Schema.Types.ObjectId,
        ref: "meals"
    },

    title: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
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
        formType: [SingleSelectedMealSchema],
      //   required: true
    },
   

})

module.exports = SelectedMeal = mongoose.model('selectedMeals', SelectedMealSchema);