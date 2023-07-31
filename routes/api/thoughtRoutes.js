const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction, removeReaction
} = require('../../controllers/thoughtController');


// router.route('/').post(createThought).get(thoughts);

router.route('/:userId/thoughts').post(createThought);
// /api/userId/thoughts

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)
// .delete(deleteUser).put(updateUser);


router.route('/:userId/reactions/:thoughtId').post(addReaction).delete(removeReaction)

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;