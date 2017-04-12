var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0 //<- Put default in quotes because default is a javascript key word
    },
    review: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var roomSchema = new mongoose.Schema({
    type: String,
    number: Number,
    description: String,
    photos: [String],
    price: Number
});

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
    currency: String,
    reviews: [reviewSchema],
    rooms: [roomSchema],
    location: {
        address: String,
        // Always store coordinates in longitude (E/W), latitude (N/S) order
        coordinates: {
            type: [Number],
            index: '2dsphere' //<-This tells mongoose that it is a 2d globe coordinates
        }
    }
});

//mongoose.model('Hotel', hotelSchema, 'hotels');
mongoose.model('Hotel', hotelSchema); // <- You don't have to define collection of 'hotels' (3rd param) - mongoose does this by pluralizing the first param.. the name of the model