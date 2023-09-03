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

// router.post('/product', async (req, res) => {
//   const newProduct = new Product({
//     title: req.body.title,
//     desc: req.body.desc,
//     imgUrl: req.body.imgUrl,
//     categ: req.body.categ,
//     inStock: req.body.inStock,
//     price: req.body.price,
//   });

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //Get Front Page products

// router.get('/frontPagProd', async (req, res) => {
//   try {
//     const product = await Product.find({ onFrontPage: true });
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET PRODUCT

// router.get('/find/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//     // if (products.length === 0) {
//     //   res.json('Erroraseree');
//     //}
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL PRODUCTS
// router.get('/products', async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;
//   const qId = req.query.id;
//   try {
//     let products;
//     //const ids = qId.split(',');

//     if (qId) {
//       products = await Product.find({
//         _id: { $in: qId.split(',') },
//       });
//     } else if (qNew) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(1);
//     } else if (qCategory) {
//       products = await Product.find({
//         categ: [qCategory],
//       });
//     } else {
//       products = await Product.find();
//     }

//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
