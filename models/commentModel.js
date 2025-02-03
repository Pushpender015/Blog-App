// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema ({
    // kon si post pr comment kr rhe ho
    post: {
        type: mongoose.Schema.Types.ObjectId, // store one type of id
        ref: "Post", // refrence to the post model
    },
    // kon commnet kr rha hai
    user: {
        type: String,
        required: true,
    }, 
    // kya comment kr rhe ho ( ( -- what comment -- ) )
    body: {
        type: String,
        required: true,
    }
});

// export
module.exports = mongoose.model("Comment" , commentSchema);
