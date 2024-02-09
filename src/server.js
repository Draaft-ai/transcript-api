const express = require("express");
const { YoutubeTranscript } = require("youtube-transcript");
const app = express();

app.get("/fetch", async (req, res) => {
  const videoId = req.body.id;
  const youtubeTranscript = await YoutubeTranscript.fetchTranscript(id);

  res.status(200).json({ data: JSON.stringify(youtubeTranscript) });
});

app.listen(4000, () => {
  console.log("Server is running on 4000");
});
