const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const Order = require('../models/Order');
const Product = require('../models/Product');

router.post(
  '/order/shipBillCkeck',
  body('*.firstName', 'Not a valid First Name ').matches(/[a-zA-Z]{2,10}/),
  body('*.lastName', 'Not a valid Last Name ').matches(/[a-zA-Z]{2,10}/),
  body('*.email', 'Not a valid email ').matches(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/),
  body('*.phone', 'Not a valid phone no ').matches(/[0-9]{10,12}/),
  body('*.address1', 'Not a valid address ').matches(/[a-zA-Z0-9]{5,20}/),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    res.status(200).json({
      success: true,
      message: 'Validation successful',
    });
  }
);

router.post('/order/save', async (req, res) => {
  const qIds = req.body.products.map((item) => item.productId);

  const findProductsInDB = await Product.find({
    _id: { $in: qIds },
  });

  const totalAmount = () => {
    const subtotal = findProductsInDB.map((item, i) => {
      return item.price * req.body.products[i].quantity;
    });

    return subtotal.reduce((total, current) => total + current, 0);
  };

  const newOrder = new Order({
    savedShippingDetails: {
      firstName: req.body.savedShippingDetails.firstName,
      lastName: req.body.savedShippingDetails.lastName,
      email: req.body.savedShippingDetails.email,
      phone: req.body.savedShippingDetails.phone,
      address1: req.body.savedShippingDetails.address1,
      address2: req.body.savedShippingDetails.address2,
    },
    savedBillingDetails: {
      firstName: req.body.savedBillingDetails.firstName,
      lastName: req.body.savedBillingDetails.lastName,
      email: req.body.savedBillingDetails.email,
      phone: req.body.savedBillingDetails.phone,
      address1: req.body.savedBillingDetails.address1,
      address2: req.body.savedBillingDetails.address2,
    },
    products: req.body.products,
    amount: totalAmount(),
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      savedOrder: savedOrder._id,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
