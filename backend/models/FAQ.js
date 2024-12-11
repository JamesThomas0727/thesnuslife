const mongoose = require('mongoose');
const FAQSchema = new mongoose.Schema({
    question_id: Number,
    question: String,
    answer: String,
});
const FAQ = mongoose.model("faqs", FAQSchema);
module.exports = FAQ;