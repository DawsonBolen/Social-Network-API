const router = require('express').Router();
const {
//   getUsers,
//   getSingleUser,
  createUser,
//   deleteUser,
//   updateUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').post(createUser);
// .get(getUsers)

// /api/students/:studentId
// router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;