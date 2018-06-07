const express = require('express');
const responseManager = require('./response/responseManager.js')
const path = require('path');
var cors = require('cors')

const app = express()
app.use(cors())

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/api/message/random', function (request, response) {
  response.send(responseManager.getRandomResponse());
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})