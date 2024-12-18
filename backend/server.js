const express = require('express');
const mongoose = require('mongoose');
var cors = require("cors");
const bodyParser = require('body-parser');
const FAQModel = require('./models/FAQ');
const ProductModel = require('./models/Product');
const CurrencyRateModel = require('./models/CurrencyRate');

const DB_URI = "mongodb://127.0.0.1:27017/thesnuslifedb";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/faqs', async (req, res) => {
    try {
        const faqs = await FAQModel.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.get('/products', async (req, res) => {
    let brand = req.query.brand;
    console.log(brand);
    if (brand !== undefined) {
        try {
            let products = await ProductModel.find()
                .where('brand', brand);
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    else {
        try {
            let products = await ProductModel.find()
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
});
app.get('/currencies', async (req, res) => {
    try {
        const currency_rates = await CurrencyRateModel.find();
        res.json({currency: currency_rates});
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});