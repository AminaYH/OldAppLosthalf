const express = require('express');
const Food = require('../models/consumption-model');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // To store image as binary

const router = express.Router();

// Route to get all foods
router.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).send('Error retrieving food data: ' + err.message);
  }
});

// Route to add a food
router.post('/foods', upload.single('image'), async (req, res) => {
  try {
    const food = new Food({
      id: req.body.id,
      name: req.body.name,
      rating: req.body.rating,
      viewCount: req.body.viewCount,
      chef: req.body.chef,
      description: req.body.description,
      cuisine: req.body.cuisine,
      ingredients: req.body.ingredients,
      cookingTime: req.body.cookingTime,
      price: req.body.price,
      expirationDate: req.body.expirationDate,
      shelfLife: req.body.shelfLife,
      wasteCategory: req.body.wasteCategory,
      consumption: req.body.consumption,
      waste: req.body.waste,
      image: req.file.buffer, // Store the image binary data
    });

    await food.save();
    res.status(201).send('Food created successfully');
  } catch (err) {
    res.status(500).send('Error creating food: ' + err.message);
  }
});

module.exports = router;
