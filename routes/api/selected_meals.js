// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Child = require('../../models/Child');
// const SelectedMeal = require('../../models/SelectedMeal');


// router.get('/:child_id/selected-meals', (req, res) => {
//    const child = Child.find({ child: req.params.child_id });
//    const category = child.category;
//    const ingredient = child.ingredient;

//    Meals.find(
//       {$text: {$search: category + ingredient}},
//       {score: {$meta: "score" }}
//    ).sort({ score: { $meta: "score" } } )
// });