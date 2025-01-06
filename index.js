
const express = require("express");
const app = express();

const facebookRoute = require("./routes/facebook");
const instagramRoute = require("./routes/instagram");
const tiktokRoute = require("./routes/tiktok");
const twitterRoute = require("./routes/twitter");
const youtubeRoute = require("./routes/youtube");
app.use(facebookRoute);
app.use(instagramRoute);
app.use(tiktokRoute);
app.use(twitterRoute);
app.use(youtubeRoute);

// const ytdl = require('ytdl-core');
// ytdl.getBasicInfo("https://youtube.com/shorts/w1uBy4a8hPY?si=aJAlQCsGy1sj0xlN").then(data => {
//     console.log(data)
// })




app.listen(3000, () => console.log("Application listening on port 3000"))