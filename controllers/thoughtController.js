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
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }




}

module.exports = thoughtController;




  // const updatedUser = await User.findByIdAndUpdate(
            //     userId,
            //     { $push: { thoughts: newThought._id } },
            //     { new: true }
            // );


            // if (!updatedUser) {
            //     // If the user is not found, handle the error accordingly
            //     return res.status(404).json({ message: 'User not found' });
            // }