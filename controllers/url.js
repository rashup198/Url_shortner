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

// get analytics of a url

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;
    const url = await Url.findOne({shortId: shortId});
    if (!url) {
        return res.status(404).json({message: "url not found"});
    }
    res.json({
    analytics: url.visitHistory,
    totalClicks : url.visitHistory.length,
    });
    res
}


module.exports = {
    createShortUrl,
    getAnalytics
}