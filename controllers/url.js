const shortid = require('shortid');

const Url = require('../model/url');

async function createShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({message: "redirectUrl is required"});
    }
    const shortId = shortid.generate()

    const url = new Url({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });
    await url.save();
    res.json(url);
}


module.exports = {
    createShortUrl
}