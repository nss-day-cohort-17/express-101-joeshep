'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// routes modules
const animalRoutes = require('./routes/animals');

// middleware
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

app.use(express.static(__dirname + '/public'));

app.use(requestTime);

app.use(animalRoutes);

app.use( (req, res) => {
  res.send("Where do you think you're going? We only have monkeys and chickens here.")
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

