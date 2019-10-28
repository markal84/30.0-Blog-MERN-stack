const express = require('express');
const router = express.Router();


const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

//get single post - singlePost exercise
router.route('/posts/:id').get(PostController.getSinglePost);

//add new post exercise
router.route('/posts').post(PostController.addPost);


module.exports = router;