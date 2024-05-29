const mongoose = require('mongoose');
const carsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
    },
    perhourrate: {
        type: Number,
        required: true,
    },
    milage: {
        type: Number,
        required: false
    },
    seats: {
        type: Number,
        required:true
    },
    image: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    availability: {
        type: Boolean,
        default: true
    },
    overtimerate: {
        type: Number,
        required:true
    },
    color: {
        type: String
    },
    fueltype: {
        type: String,
        required:false,
        Enumerator: ['petrol', 'diesel', 'gas'],
        default: 'petrol',
    },
    transmissiontype: {
        type: String,
        required:false,
        Enumerator: ['manual', 'automatic'],
        default: 'manual',
    },
    plateno:{
        type:String,
        required:true
    }
})
mongoose.model('cars', carsSchema);
module.exports = mongoose.model('cars')