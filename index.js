const express = require('express');
const db = require('./models')
const apiRouter = require('./routes/vehichles.js');

const app = express();
app.use(express.json());
app.use('/api/vehichles', apiRouter);

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await db.sequelize.sync()
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        }); 
    }
    catch (err) {
        console.error("Error: " + err);
    }
}

startServer();
