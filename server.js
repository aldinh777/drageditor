const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));
app.post('/', function(req, res, next) {
  const {filename, text} = req.body;
  res.set('Content-Disposition', 'attachment; filename="' + filename + '";');
  res.end(text);
});
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);
