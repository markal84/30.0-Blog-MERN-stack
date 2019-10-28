const Post = require('../models/post.model');
const uuid = require('uuid'); //newPost exercise

// get all posts
exports.getPosts = async (req, res) => {

    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

//get single post - singlePost exercise

exports.getSinglePost = async(req, res) => {
  Post.findOne({ id: req.params.id }).exec((err, post) => { //using findOne function
      if (err) {
          res.status(500).send(err);
      }
      res.json( post );
  });
};

//add post exercise
exports.addPost = async function (req, res) {

  try {
    const { title, author, content } = req.body;

    let newPost = new Post(req.body);
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}