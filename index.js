const express = require('express');
const db = require('./models')
const apiRouter = require('./routes/vehichles.js');

const app = express();
app.use(express.json());
app.use('/api/vehichles', apiRouter);

const PORT = process.env.PORT || 3000

db.sequelize.sync()
    .then((req) => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    })})
    .catch((err) => {
        console.log(err)
    }); 