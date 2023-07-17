const express = require('express');
const router = express.Router();
const poolRouter = require('./pool');
const error = require('./../middlewares/error');

router.use('/pool', poolRouter);



router.use(error);

module.exports = router;