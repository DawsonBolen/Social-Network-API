const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend, removeFriend
} = require('../../controllers/userController');

// /api/students
router.route('/').post(createUser).get(getUsers);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)
// .delete(deleteUser).put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;