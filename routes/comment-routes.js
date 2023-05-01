const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../controllers/comment-controller');


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router
    .route('/:pizzaId/:commentId/:replyId')
    .put(addReply)
    .delete(removeReply);

module.exports = router;