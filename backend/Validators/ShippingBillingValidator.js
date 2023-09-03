// const { check, validationResult } = require('express-validator');

// exports.ShippingBillingValidator = [
//   check('firstName')
//     .matches(/[a-zA-Z]{2,10}/)
//     .withMessage('Invalid f Name'),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return res.status(422).json({ errors: errors.array() });
//     next();
//   },
// ];
