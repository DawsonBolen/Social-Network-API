const { Schema, Types } = require('mongoose');

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
            type: Schema.Types.ObjectId,
            ref: 'Username',
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reactions',
            },
        ]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


const reactions = new mongoose.Schema({
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

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;