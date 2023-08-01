const { Schema, Types, model } = require('mongoose');
const reactionSchema = new Schema({
    reactionBody: { type: String, required: true },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
        },
        reactions: [reactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);



thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;