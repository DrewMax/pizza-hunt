const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
        required: 'You need to provide your name!',
    },
    commentBody: {
        type: String,
        required: 'You need to provide a comment!',
    },
    createdAt: {
        type: Date,
        default: Date.now,  
    },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
