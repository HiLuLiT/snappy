// BASE SETUP
// ==============================================

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')

const os = require('os');

fs.writeFileSync(os.tmpdir() + '/snappy.json', fs.readFileSync(__dirname + '/snappy.json'));

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}))

// ROUTES
// ==============================================

app.use(bodyParser.json());
app.get('/users/data', (req, res) => {
  const data = fs.readFileSync(os.tmpdir() + '/snappy.json')
  res.send(data)
  res.sendFile( os.tmpdir() + '/snappy.json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
});

// applying express "listeners" to POST methods from XHR, which updates our data with new users
app.post('/add-new-user', (req, res) => {
  const data = fs.readFileSync(os.tmpdir() + '/snappy.json');
  const users = JSON.parse(data);
  users.push(req.body);
  fs.writeFileSync(os.tmpdir() + '/snappy.json', JSON.stringify(users));
  res.send('OK');
});

const path = require('path');
app.get('/app.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/app.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
