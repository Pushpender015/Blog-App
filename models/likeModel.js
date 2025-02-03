// import mongoose
const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema({
    // kon si post pr like kr rhe ho
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",    // ref. to the post model
    }, 
    // kon sa user like kr rha hai
    user: {
        type: String,
        required: true,
    },
});

// export
module.exports = mongoose.model("Like" , likeSchema);