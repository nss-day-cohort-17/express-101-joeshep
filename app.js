'use strict';

const express = require('express');
const app = express();

// middleware
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

app.use(express.static(__dirname + '/public'));

app.use(requestTime)

app.get('/monkeys', (req, res, next) => {
  console.log("Fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  res.sendFile(__dirname + '/public/monkeys.html');
});

app.get('/chickens', (req, res, next) => {
  console.log("Lookin fer chickens");
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
});

app.post('/chickens', (req, res, next) => {
  console.log("Posting a form for chickens");
});

app.use( (req, res) => {
  res.send("Where do you think you're going? We only have monkeys and chickens here.")
});



app.listen(3000, () => {
  console.log("Server listening on port 3000");
})

