const { User, Thought } = require('../models');

const userController = {

    //get all users
    // getUsers: async (req, res) => {
    //     try {
    //         const users = await User.find();
    //         res.json(users);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // },

    // getSingleUser: async (req, res) => {
    //     try {
    //         const singleUser = await User.findOne({ _id: req.params.userId }).select('-__v');

    //         if (!student) {
    //             return res.status(404).json({ message: 'No student with that ID' });
    //         }
    //         res.json(singleUser)
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);


        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    // updateUser: async (req, res) => {
    //     try {
    //         const userId = req.params.userId;
    //         const updateData = req.body;
    //         const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    //         if (!updatedUser) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }

    //         res.json(updatedUser);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // },

    // deleteUser: async (req, res) => {
    //     try {
    //         const userId = req.params.userId;
    //         const deletedUser = await User.findOneAndRemove(userId);
    //         if (!deletedUser) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }

    //         res.json({ message: 'User deleted successfully' });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json(err);
    //     }
    // }



}


module.exports = userController;