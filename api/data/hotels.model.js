var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0 //<- Put default in quotes because default is a javascript key word
    },
    services: [String], //<-Says services is an array of strings
    description: String,
    photos: [String],
    currency: String
});

mongoose.model('Hotel', hotelSchema, 'hotels');