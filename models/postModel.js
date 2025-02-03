// import mongoose
const mongoose = require("mongoose");

// route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true, 
    },
    //  kon kon se log ne like kra hai comment ko
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    // kon kon se log ne comment kia hai
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
})

// export
module.exports = mongoose.model("Post" , postSchema);