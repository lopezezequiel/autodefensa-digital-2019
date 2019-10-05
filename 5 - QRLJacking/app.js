const express = require('express');
const app = express();
const cors = require('cors')

 
app.use(cors())
app.use(express.json());


var data;

app.post('/', function (req, res) {
  data = req.body;
  res.send(200);
});

app.get('/', function (req, res) {
  console.log(data);
  res.json(data);
});

app.listen(3000, function () {
  console.log('QRLJacking Server!');
});
