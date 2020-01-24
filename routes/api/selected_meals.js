const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Child = require('../../models/Child');
const SelectedMeal = require('../../models/SelectedMeal');
// const SingleSelectedMeal = require("../../models/SelectedMeal")



// when meals already selected and fetch the selected meals

router.post('/:child_id/selectedMeals', 
            async (req, res) => {

                const matchedMeals = new SelectedMeal({
                    child: req.params.child_id,
                    meals: req.body.meals
                });
                
            
                const selectedMeals = await matchedMeals.save();
               console.log(matchedMeals, selectedMeals)

                res.status(200).json({selectedMeals})

        });

router.get('/:child_id',
        async (req, res) => {
            let child_id = req.params.child_id;
            // console.log(child_id);

            let selectedMeal = await SelectedMeal.findOne({child: req.params.child_id});

            let meals = selectedMeal.meals

            res.status(200).json({selectedMeals, meals});
            
        });

router.put('/:child_id/:meal_id', 
        async (req, res) => {
            let selectedMeal = await SelectedMeal.findOne({ child: req.params.child_id });

            let singleSelectedmeal = selectedMeal.meals.filter (meal => meal.meal.toString() === req.params.meal_id )[0];
             // eidt a meal's info by the user
             console.log(singleSelectedmeal);
            singleSelectedmeal.ingredients = req.body.ingredients || singleSelectedmeal.ingredients;
            singleSelectedmeal.title = req.body.title || singleSelectedmeal.title ;
            singleSelectedmeal.category = req.body.category || singleSelectedmeal.category ;
             // replace by a new searched meal
            singleSelectedmeal.meal = req.body.mealId;

            const newSelectedMeal = await selectedMeal.save()

            res.status(200).json({newSelectedMeal})

        }
)  

//  user can delete the meal they don't like
router.delete('/:child_id/:meal_id'),
        async (req, res) => {
            let selectedMeal = await SelectedMeal.findOne({ child: req.params.child_id });

            selectedMeal.meals = selectedMeal.meals.filter(meal => meal.meal.toString() !== meal_id); 
            const newSelectedMeal = await selectedMeal.save()

            res.status(200).json({ newSelectedMeal })

        }

module.exports = router;




    
