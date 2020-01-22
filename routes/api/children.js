const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meal = require('../../models/Meal');
const Child = require('../../models/Child');
const passport = require('passport');

router.get('/:id',
   (req, res) => {
      Child.findById(req.params.id)
         .then(child => res.json(child))
         .catch(err =>
            res.status(404).json({ nochildfound: 'No child found with that ID' })
         );
});

router.post('/:user_id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      // const { errors, isValid } = validateChildInput(req.body);

      // if (!isValid) {
      //    return res.status(400).json(errors);
      // }
      console.log(req.body);
      const newChild = new Child({
         user: req.params.user_id,
         name: req.body.name,
         age: req.body.age,
         category: req.body.category,
         ingredient: req.body.ingredient
      });

      newChild.save().then(child => res.json(child));
   }
);

router.get('/:child_id/selected-meals', (req, res) => {
   const child = Child.find({ child: req.params.child_id });
   const category = child.category;
   // const ingredient = child.ingredient;
   Meal.find(
      { $text: { $search: category } },
      { score: { $meta: "score" } }
   ).sort({ score: { $meta: "score" } })
      .then(select_meals => res.json(select_meals))
      .catch(err =>
         res.status(404).json({ noselectmealsfound: 'No meals found for child' })
      );
});

module.exports = router;