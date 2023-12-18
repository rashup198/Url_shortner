const {shortId} = require('shortid');

const Url = require('../model/url');

async function createShortUrl(req, res) {
    const {redirectUrl} = req.body;
    if (!redirectUrl) {
        return res.status(400).json({message: "redirectUrl is required"});
    }

    const url = new Url({
        shortId: shortId(),
        redirectUrl: body.redirectUrl,
        visitHistory: []
    });
    await url.save();
    res.json(url);
}


module.exports = {
    createShortUrl
}