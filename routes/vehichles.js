const express = require('express');
const { Vehichles }  = require('../models')
const router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        // Obtain all rows of vehichles database
        const vehichles = await Vehichles.findAll();
        // Return the results as JSON
        res.send(vehichles);
    }
    catch (err) {
        // Log the error if there is a problem
        console.error(err)
        res.sendStatus(500);
    }
})

module.exports = router;