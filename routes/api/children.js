const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Meal = require('../../models/Meal');
const Child = require('../../models/Child');
const passport = require('passport');

//fectch one child' matchingmeals 
router.get('/:child_id/matching-meals', async (req, res) => {
   const child = await Child.findById( req.params.child_id );
   const childCategoryRe = "(" + child.category.join(")|(") + ")";
   console.log(childCategoryRe);
   const re = new RegExp(childCategoryRe, "i");
   const select_meals = await Meal.aggregate([
      { $match: { category: re } },
      { $sample: { size: 5 } }
   ])

   res.status(200).json(select_meals);
});

// fetch one child's info
router.get('/:id',
   (req, res) => {
      Child.findById(req.params.id)
         .then(child => res.json(child))
         .catch(err =>
            res.status(404).json({ nochildfound: 'No child found with that ID' })
         );
});

//create a child
router.post('/:user_id',
   passport.authenticate('jwt', { session: false }),
   (req, res) => {
      
      console.log(req.body);
      const newChild = new Child({
         user: req.params.user_id,
         name: req.body.name,
         age: req.body.age,
         gender: req.body.gender,
         category: req.body.category,
         ingredient: req.body.ingredient
      });

      newChild.save().then(child => res.json(child));
   }
);

router.delete('/:id',(req,res) => {
   Child.findByIdAndRemove(req.params.id, (err, child) => {
      if (err) return res.status(500).send(err);
      const response = {
         message: "child successfully deleted",
         id: child._id
      };
      return res.status(200).send(response);
   });
})


// router.get('/:child_id/selected-meals', (req, res) => {
//    const child = Child.find({ child: req.params.child_id });
//    const category = child.category;
//    const ingredient = child.ingredient
//    Meal.find({
//       $limit:10,
//       $sort: [
//          {
//             category: category,
//             ingredient: {
//                $in: [ingredient]
//             }
//          }
//       ],
//       $query: {
//          category: category,
//          ingredient: {
//             $in: [ingredient]
//          }
//       }
//    })
//       .catch(err =>
//          res.status(404).json({ noselectmealsfound: 'No meals found for child' })
//       );
// });




module.exports = router;
