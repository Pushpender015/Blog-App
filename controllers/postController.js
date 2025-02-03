const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        // fetch data from req. body
        const { title, body } = req.body;

        // create a post object
        const post = new Post({
            title,
            body,
        });

        // save the new post into the database
        const savedPost = await post.save();

        // send the saved post as response
        res.json({
            post: savedPost,
        });
    } catch (err) {
        console.error("Error while creating post:", err);  // Log the actual error to debug
        return res.status(400).json({
            err: "error while creating post",
        });
    }
};


// get all post controller
exports.getAllPosts = async (req , res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            posts,
        })
    }
    catch(err) {
        console.error("Error while creating post:", err);  // Log the actual error to debug
        return res.status(400).json({
            err: "error while creating post",
        });
    }
}