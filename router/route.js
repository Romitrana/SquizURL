const express = require('express');
const router = express.Router();
const {shortUrl} = require('../controllers/url')

router.route('/squizUrl').post(shortUrl);


module.exports = router;