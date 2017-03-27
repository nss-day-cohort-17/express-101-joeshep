'use strict';

const { Router } = require('express');
const path = require('path');
const {newPage, submit} = require('../controllers/animalCtrl')

const animalRouter = Router();

// Applying middleware to all routes in the router
// animalRouter.use(function (req, res, next) {
//   if (req.user === 'farmer') {
//     next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// });

animalRouter.get('/monkeys', (req, res, next) => {
  console.log("Fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  console.log("req?", req.method);
  newPage(req, res, null);
});

animalRouter.get('/chickens', newPage)

animalRouter.post('/chickens', submit);

module.exports = animalRouter;

