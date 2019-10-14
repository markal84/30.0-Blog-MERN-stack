const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
// import routes
const postRoutes = require('./routes/post.routes');

const app = express();

// middleware - cors and express
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//routes
app.use('/api', postRoutes);

// connects our back end code with the database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));
db.on('error', (err) => console.log('Error ' + err));

//server start
app.listen(config.PORT, function(){
    console.log('Server is running on port:', config.PORT);
});