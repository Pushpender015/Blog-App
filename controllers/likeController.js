// import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel"); 

// like a post

exports.likePost = async (req , res) => {
    try {
        // fetch data from req. body
        const {post , user} = req.body;

        // create a like object
        const like = new Like({
            post , user
        })

        // save the new comment into the database
        const savedLike = await like.save();

        // find the post by ID , add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true }).populate("likes").exec();

        res.json({
            post: updatedPost,
        })
                
    }
    catch(err) {
        return res.status(500).json({
            err: "error while creating comment",
        });
    }
}

exports.disLikePost = async (req , res) => {
    try {
        const{post , like} = req.body;
        
        // find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id: like});

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

        res.json({
            post:updatedPost,
        })
    }
    catch(err) {
        return res.status(500).json({
            err: "error while creating comment",
        });
    }
}