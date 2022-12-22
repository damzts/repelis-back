const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config({ path: __dirname + '/.env' });

const moviesRouter = require('./routes/movies');

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'link start' });
});

const connectDB = () => {
    mongoose.connect(process.env.DB_URI);
    console.log("database conected");
};

const server = app.listen(port, () => {
    console.log(`server is running in port ${port}`);
    connectDB();
});

app.use("/movies",moviesRouter);

module.exports = {app, server};