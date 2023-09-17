// Candlelight Dinners

const mongoose = require('mongoose')

const five_star_dinning = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Phone: {
        type: Number
    },
    Company_name: {
        type: String
    },
    Message: {
        type: String 
    },
    Interest: {
        type: String 
    },
});

const five_star = mongoose.model('5 Star dinning', five_star_dinning);

module.exports = { five_star }