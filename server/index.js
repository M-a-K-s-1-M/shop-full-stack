require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const cors = require('cors');
const fileUpload = require('express-fileupload')
const models = require('./models/models')
const router = require('./routes/index')


const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors())
app.use(express.json());
app.use(fileUpload({}))
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start();