'use strict';

const { Router } = require('express');
const path = require('path');

const rootRouter = Router();

rootRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = rootRouter;
