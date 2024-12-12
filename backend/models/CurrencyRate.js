const mongoose = require('mongoose');
const CurrencyRateSchema = new mongoose.Schema({
    currency_id: Number,
    currency_name: String,
    currency_rate: Number,
    registered: { type: Date, default: Date.now },
});
const CurrencyRate = mongoose.model("currencies", CurrencyRateSchema);
module.exports = CurrencyRate;