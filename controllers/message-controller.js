const { Message } = require('../models');

module.exports = {
    getMessages(req, res) {
        Message.find()
            .select('-__v')
            .then((messages) => res.json(messages))
            .catch((err) => res.status(500).json(err));
    },
    getOneMessage(req, res) {
        Message.findOne({ _id: req.params.messageId })
            .select('-__v')
            .then((message) =>
                !message
                    ? res.status(404).json({ message: 'No message found with that id' })
                    : res.json(message)
            )
            .catch((err) => res.status(500).json(err));
    },
}