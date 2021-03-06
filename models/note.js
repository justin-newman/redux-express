const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    title: { type: String, required: true },
    body: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Note', Note);