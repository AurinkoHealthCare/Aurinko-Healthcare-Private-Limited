const express = require('express');
const router = express.Router();
const model = require('../Schema/Schema')

router.post('/contact-us', async (req, res) => {
  try {
    const data = new model(req.body);
    const result = await data.save();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

module.exports = router;