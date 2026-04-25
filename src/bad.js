const express = require('express');
const app = express();

app.get('/run', (req, res) => {
  const cmd = req.query.cmd;
  eval(cmd); // user-controlled input → eval
  res.send("done");
});

app.listen(3000);
