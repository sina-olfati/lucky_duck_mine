const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
  registerValidator(){
    return [
      check('title')
      .not()
      .isEmpty()
      .withMessage('title cant be empty'),
    
      check('description')
        .not()
        .isEmpty()
        .withMessage('description cant be empty'),
      check('ticket_value')
        .not()
        .isEmpty()
        .withMessage('ticket_value cant be empty'),
      check('status')
        .not()
        .isEmpty()
        .withMessage('status cant be empty'),
    ]
  }


}