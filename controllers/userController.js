const { User, Thought } = require('../models');

const userController = {

    //get all users
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const singleUser = await User.findOne({ _id: req.params.userId }).select('-__v');

            if (!singleUser) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(singleUser)
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);


        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            const updateData = req.body;
            const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.userId;
            const deletedUser = await User.findOneAndRemove(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    addFriend: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $push: { friends: req.params.friendId } }, { new: true });

            if (!updatedUser) {
                console.log('User not found.');
                return;
            }
            res.json(updatedUser)

            //push to the array

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    , removeFriend: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });

            if (!updatedUser) {
                console.log('User not found.');
                return;
            }
            res.json(updatedUser)

            //push to the array

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }


}


module.exports = userController;