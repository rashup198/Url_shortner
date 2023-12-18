const express = require('express');
const router = express.Router();
const {createShortUrl} = require('../controllers/url');

router.post("/",createShortUrl)

module.exports = router;