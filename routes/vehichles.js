const express = require('express');
const { Vehichles }  = require('../models')
const router = express.Router();

router.get('/', async (req, res) => {
    // Obtain all rows of vehichles database
    const vehichles = await Vehichles.findAll();

    // Return the results as JSON
    res.send(vehichles);
    
})

module.exports = router;