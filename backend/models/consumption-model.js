const mongoose = require('mongoose');

const consumptionSchema = new mongoose.Schema({
    userId: String,
    consumedAt: Date,
    portionSize: String,
    location: String,
    methodOfConsumption: String,
    comments: String,
});

const wasteSchema = new mongoose.Schema({
    wastedAt: Date,
    amountWasted: String,
    reason: String,
    location: String,
    storageCondition: String,
    comments: String,
});

const foodSchema = new mongoose.Schema({
    id: String,
    name: String,
    rating: Number,
    viewCount: Number,
    chef: String,
    description: String,
    cuisine: String,
    ingredients: [String],
    cookingTime: Number,
    price: Number,
    expirationDate: Date,
    shelfLife: String,
    wasteCategory: String,
    consumption: [consumptionSchema],
    waste: [wasteSchema],
    image: Buffer, // For storing image as binary data
});

module.exports = mongoose.model('Food', foodSchema);
