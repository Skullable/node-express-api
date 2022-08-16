const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Integer,
        requied: true,
    }

})