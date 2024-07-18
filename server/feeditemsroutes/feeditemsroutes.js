const express = require('express');
const router = express.Router( );

let feedItemController = require("../controller/feedController");

router.route('/')
    .get(feedItemController.getfeedItem)
    .post(feedItemController.savefeedItem);

router.route('/:feedItemId')
    .get(feedItemController.getfeedcloud)
    .delete(feedItemController.deletefeedItem)
    .patch(feedItemController.updatefeedItem)
    .put(feedItemController.getfeedput)


module.exports = router;
