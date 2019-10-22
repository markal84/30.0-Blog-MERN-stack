const Post = require('../models/post.model');

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