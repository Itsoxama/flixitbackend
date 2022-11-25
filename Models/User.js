

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({

    name: {
        type: String
    },
    phone: {
        type: String
    },
    location: {
        type: String,
    }
    ,
    bio: {
        type: String,
    },

    profileimage: {
        type: String,
    },
    email: {
        type: String,


    },
    password: {
        type: String
    },


});






const Userx = mongoose.model('user', user);
module.exports = Userx

