const { Schema } = require('mongoose');

const profileSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: true
    },
    location:{
        type: String,
    },
    job:{
        type: String,
    },
    gender:{
        type: String,
        required: true
    },
    interests:{
        type: Array,
    },
    github:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    images:{
        type: Array,
    }
});


module.exports = profileSchema