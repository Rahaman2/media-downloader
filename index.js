
const express = require("express");
const app = express();

const facebookRoute = require("./routes/facebook");
const instagramRoute = require("./routes/instagram");
const tiktokRoute = require("./routes/tiktok");
const twitterRoute = require("./routes/twitter");
app.use(facebookRoute);
app.use(instagramRoute);
app.use(tiktokRoute);
app.use(twitterRoute);



app.listen(3000, () => console.log("Application listening on port 3000"))