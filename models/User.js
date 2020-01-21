const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    }

})

module.exports = User = mongoose.model('users', UserSchema);
