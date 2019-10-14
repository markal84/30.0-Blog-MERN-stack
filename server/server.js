const express = require('express');
const cors = require('cors');
const config = require('./config');
// import routes
const postRoutes = require('./routes/post.routes');

const app = express();

// middleware - cors and express
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//routes
app.use('/api', postRoutes);

//server start
app.listen(config.PORT, function(){
    console.log('Server is running on port:', config.PORT);
});