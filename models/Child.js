const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    category: {
        type: [String],
        required: false
    },
    ingredient: {
        type: [String],
        required: false
    }

})


module.exports = Child = mongoose.model("children", ChildSchema)