const router = require('express').Router();
const {
    getMessages,
    getOneMessage
} = require('../../controllers/message-controller');

// api/messages
router.route('/')
    .get(getMessages);

router.route('/:messageId')
    .get(getOneMessage);


module.exports = router;