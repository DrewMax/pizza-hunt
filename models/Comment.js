const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

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
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    // use ReplySchema to validate data for a reply
    replies: [ReplySchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const ReplySchema = new Schema({
    // set custom id to avoid confusion with parent comment _id
    replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    replyBody: {
        type: String,
        required: true,
        trim: true,
    },
    writtenBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
},
{
    toJSON: {
        getters: true,
    },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
