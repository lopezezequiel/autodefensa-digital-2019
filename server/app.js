const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http').createServer(app);
const io = require('socket.io')(http);
 
app.use(cors())
app.use(express.json());
app.use('/static', express.static(__dirname + '/client/build/static'));
app.use('/public', express.static(__dirname + '/public'));

var hashMap = {};

app.post('/hashmap/:key', function (req, res) {
  const key = req.params.key;
  const value = req.body;

  hashMap[key] = value;
  io.in(key).emit('message', value);

  res.sendStatus(200);
});

app.get('/hashmap/:key', function (req, res) {
  const key = req.params.key;
  res.json(hashMap[key] || {});
});

app.get('/:key', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});

io.on('connection', function(socket){
  socket.on('subscribe', (key) => {
    console.log('subscribed');
    socket.join(key);
  })
});

http.listen(3000, function () {
  console.log('EvilServer Running...');
});
