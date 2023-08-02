const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", function (req, res) {
  res.send("신기하당~");
});

app.listen(PORT, function () {
  //   console.log(`Listening in port ${PORT}! http://localhost:${PORT}`);
});
