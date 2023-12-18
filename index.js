const express = require('express');

const app = express();

const port = 8000;
const urlRoutes = require('./routes/url');

app.use(express.json());
app.use("/api/url", urlRoutes);

//mogno db connect
const mongoconnect = require('./connect');

mongoconnect.connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});