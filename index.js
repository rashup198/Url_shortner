const express = require('express');
const URL = require('./model/url');

const app = express();

const port = 8000;
const urlRoutes = require('./routes/url');

app.use(express.json());
app.use("/url", urlRoutes);

app.get("/:shortId" , async(req,res)=>{
    const shortId = req.params.shortId;
 const entry=   await URL.findOneAndUpdate({
        shortId: shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.redirectUrl);
})

//mogno db connect
const mongoconnect = require('./connect');

mongoconnect.connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});