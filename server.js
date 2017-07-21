const express = require('express');
var app = express();
app.get('/',function(req,res) {
  res.send('welcome to Node Twitter.');
})

app.listen(8000);
