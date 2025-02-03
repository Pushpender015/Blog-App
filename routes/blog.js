// create a instance of express
const express = require("express");

// using express create a object of ROUTER
const router = express.Router();

// import controllers
const { createComment } = require("../controllers/commentController")
const { createPost , getAllPosts } = require("../controllers/postController")
const { likePost , disLikePost } = require("../controllers/likeController")


// define API routes ( mapping the controller with path )
router.post("/comments/create" , createComment);
router.post("/posts/create" , createPost);
router.get("/posts" , getAllPosts);
router.post("/likes/like" , likePost);
router.post("/likes/dislike" , disLikePost);

  

// export router
module.exports = router;