var express = require("express");
var app = express();
var path = require('path');

// app.get('/', (req, res) => { res.send('Hello world')});
app.get('/otracosa', function(req, res) {
  // res.send('hello world')
  // se cambia res.send por res.sendFile para que siempre obtenga la ruta correcta
  res.sendFile(__dirname+'/index.html');
});

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets')));

app.listen(8080);
