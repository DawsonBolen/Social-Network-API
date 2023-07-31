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
            if (!singleThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            const singleThought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
            res.json(singleThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    createThought: async (req, res) => {
        try {
            const newThought = Thought.create(req.body);
            const userId = req.body.userId;
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $push: { thoughts: newThought._id } },
                { new: true }
            );

            if (!updatedUser) {
                // If the user is not found, handle the error accordingly
                return res.status(404).json({ message: 'User not found' });
            }
            await user.save();

            res.json(newThought);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }




}