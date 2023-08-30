const router = require('express').Router();
const Product = require('../models/Product');

// router.get('/product/1', (req, res) => {
//   res.send('test mmree');
// });

//Get Front Page products

router.get('/frontPagProd', async (req, res) => {
  try {
    const product = await Product.find({ onFrontPage: true });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT

router.get('/find/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
    // if (products.length === 0) {
    //   res.json('Erroraseree');
    //}
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get('/products', async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qId = req.query.id;
  try {
    let products;
    //const ids = qId.split(',');

    if (qId) {
      products = await Product.find({
        _id: { $in: qId.split(',') },
      });
    } else if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categ: [qCategory],
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;
