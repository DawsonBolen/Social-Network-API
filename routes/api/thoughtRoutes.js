const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought,
    addReaction
    // removeReaction
} = require('../../controllers/thoughtController');



router.route('/:userId').post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

// router.route('/:reactionId').delete(removeReaction);



