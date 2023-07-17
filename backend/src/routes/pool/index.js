const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.post(
  '/',
  validator.registerValidator(),
  controller.validate,
  controller.create
);
router.get(
  '/',
  controller.getPool
);



module.exports = router;