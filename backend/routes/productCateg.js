const router = require('express').Router();
const ProductCateg = require('../models/ProductCateg');

router.get('/productCateg', async (req, res) => {
  try {
    const prodCateg = await ProductCateg.find();
    res.status(200).json(prodCateg);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/productCateg', async (req, res) => {
  const newProductCateg = new ProductCateg({
    title: req.body.title,

    imgUrl: req.body.imgUrl,
    categ: req.body.categ,
  });

  try {
    const savedProductCateg = await newProductCateg.save();
    res.status(201).json(savedProductCateg);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
