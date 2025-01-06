const { youtube } = require("btch-downloader");

module.exports = {
    get: async (req, res ) => {
        try {
            const { url } = req.query;
            if(!url) {
                res.json({error: "You must enter a media url"});
            } else {
                const downloaderUrl = await youtube(url);
                res.json(downloaderUrl)
            }
        } catch (error) {
            res.json({error: "Video not found"});
        }    
    }
}