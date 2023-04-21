const express = require("express");
const te = require("tradingeconomics");
const app = express();

// the files from the public directory are being served like this
app.use(express.static("public"));

//this is where I set up Trading Economics API credentials
te.login("f46297f692f7433:2r47su4kfwrmwfg");

// this is the endpoint for getting news data.
app.get("/news", (req, res) => {
  te.getNews()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred");
    });
});

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
