const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    _fav: {
        type: Boolean,
    },
});

const MovieModel = mongoose.model("Movie", MovieSchema);
module.exports = MovieModel;