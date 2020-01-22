const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Child = require('../../models/Child');
const SelectedMeal = require('../../models/SelectedMeal');
// const SingleSelectedMeal = require("../../models/SelectedMeal")

router.get('/:child_id',
        (req, res) => {
            debugger;
            SelectedMeal.find({child: req.params.child_id})
                .then(selmeals => res.json(selmeals))
                .catch(err =>
                    res.status(404).json({ nochildfound: 'No meals for this child were found' })
                );
        });

module.exports = router;




    
