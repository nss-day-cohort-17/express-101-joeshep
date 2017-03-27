const { Router } = require('express');
const path = require('path');

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
  res.sendFile(path.join(__dirname, '../public', 'monkeys.html'));
});

animalRouter.get('/chickens', (req, res, next) => {
  console.log("Lookin fer chickens");
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
});

animalRouter.post('/chickens', (req, res, next) => {
  console.log("Posting a form for chickens");
  res.send("Nothing here but us chickens");
});

module.exports = animalRouter;

