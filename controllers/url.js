var shorthener = require("node-url-shortener");

const shortUrl = async (req, res) => {
  try {
    shorthener.short(req.body.Lurl, function (err, url) {
      if (err) {
        return res.status(500).json({ error: "Failed to shorten URL" });
      }
     res.status(200).json({ shorturl: url });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { shortUrl };
