const router = require('express').Router();
const stripe = require('stripe')(
  'sk_test_51NkJqMLDzGYIsB1HLe16IGEUFXV2n1ff2N1ty5MhEzwzGNITki49qAoWEBLQjxizw4chjlzJ9esB4nqHTRVuBe3r00WZnEc0kx'
);

const Product = require('../models/Product');
// const StripePay = require('../models/StripePay');

const getCartProducts = async (qId) => {
  try {
    const products = await Product.find({
      _id: { $in: qId.split(',') },
    });
  } catch (error) {
    console.log(error);
  }
  console.log(products);
};

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: 'prod1' }],
//   [2, { priceInCents: 20000, name: 'prod2' }],
// ]);

router.post('/create-checkout-session', async (req, res) => {
  const qIds = req.body.items.map((item) => item.id);
  //const qIds = qId.toString();
  //console.log(qIds);

  const findProductsInDB = await Product.find({
    _id: { $in: qIds },
  });

  try {
    let lineItems = [];

    for (const i in findProductsInDB) {
      const item = findProductsInDB[i];
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: req.body.items[i].quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `http://localhost:5173/`,
      cancel_url: `http://localhost:5173/Test`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
