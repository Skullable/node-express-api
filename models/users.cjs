const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },
    age:{
        type: Number,
        requied: false,
    }

});

module.exports = mongoose.model('users', userSchema)