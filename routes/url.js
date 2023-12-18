const express = require('express');
const router = express.Router();
const {createShortUrl} = require('../controllers/url');
const {getAnalytics} = require('../controllers/url');

router.post("/",createShortUrl)
router.get("/analytics/:shortId",getAnalytics)

module.exports = router;