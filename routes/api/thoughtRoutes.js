const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    // deleteThought,
    // updateThought,
    // addReaction, removeReaction
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts);

router.route('/:userId').post(createThought);

router.route('/:thoughtId').get(getSingleThought);
// users/:userId/thoughts
// router.route('/:userId').

// router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)
// .delete(deleteUser).put(updateUser);


// router.route('/:userId/reactions/:thoughtId').post(addReaction).delete(removeReaction)

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;