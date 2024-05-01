const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

const corsOptions = {
    origin: ['https://sport-shop-8.netlify.app'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/image', express.static('./images'))
app.use(express.json())
app.use(require('./src/routes/routes'))

const port = process.env.PORT || 4200
const env = process.env.NODE_ENV || "development"


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
    console.log(`ENV on: ${env}`)
})