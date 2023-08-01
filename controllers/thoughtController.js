// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const thoughtController = {
    //get all thoughts
    getThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    getSingleThought: async (req, res) => {
        try {
            const singleThought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
            if (!singleThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(singleThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    createThought: async (req, res) => {
        try {
            // const newThought = await Thought.create(req.body);
            const userId = req.params.userId;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const newThought = await Thought.create({
                thoughtText: req.body.thoughtText,
                username: user.username,
            });

            user.thoughts.push(newThought._id);

            await user.save();

            res.json(newThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },



    updateThought: async (req, res) => {
        try {
            const thoughtId = req.params.thoughtId;
            const updateData = req.body;
            const updatedThought = await Thought.findByIdAndUpdate(thoughtId, updateData, { new: true });

            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    deleteThought: async (req, res) => {
        try {
            const thoughtId = req.params.thoughtId;
            const deletedThought = await Thought.findOneAndRemove(thoughtId);
            if (!deletedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(deletedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // addReaction: async (req, res) => {
    //     try {

    //         const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: newReactions } }, { new: true });
    //         if (!updatedThought) {
    //             console.log('Thought not found.');
    //             return;
    //         }

    //         res.json(updatedThought);

    //         await thought.save();

    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // },
    addReaction: async (req, res) => {
        try {
            const thoughtId = req.params.thoughtId;
            const { reactionBody, username } = req.body;

            // Create the new reaction
            const newReaction = {
                reactionBody: reactionBody,
                username: username,
            };

            // Update the thought with the new reaction
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: newReaction } },
                { new: true }
            );

            if (!updatedThought) {
                console.log('Thought not found.');
                return;
            }

            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    romoveReaction: async (req, res) => {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: req.params.reactionId } }, { new: true });
            if (!updatedThought) {
                console.log('Thought not found.');
                return;
            }

            res.json(updatedThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }



}

module.exports = thoughtController;




