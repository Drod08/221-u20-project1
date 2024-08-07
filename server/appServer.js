const express = require('express')
const bodyParser = require('body-parser');
const app = express();

//const app = express();
app.use(express.static('client/public'));
app.use(bodyParser.json({ type: 'application /json'}))
//view /vwebpage endpoints
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
//API endpoints
const feeditemsroutes = require("./feeditemsroutes/feeditemsroutes");
app.use("/api/currentstories", feeditemsroutes);



app.listen(1337, () => console.log('Listening on port 1337.'))
