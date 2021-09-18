const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({test: 'test'});
    // return contents of vehichles database in json
})

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

module.exports = router;