const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

const Product = require('../models/Product');
const Order = require('../models/Order');

// const StripePay = require('../models/StripePay');

// const getCartProducts = async (qId) => {
//   try {
//     const products = await Product.find({
//       _id: { $in: qId.split(',') },
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(products);
// };

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: 'prod1' }],
//   [2, { priceInCents: 20000, name: 'prod2' }],
// ]);

router.post('/create-checkout-session', async (req, res) => {
  const orderId = req.body.orderId;
  const findOrderInDb = await Order.findById(orderId);

  const qIds = findOrderInDb.products.map((item) => item.productId);

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
        quantity: findOrderInDb.products[i].quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      client_reference_id: orderId,
      success_url: `http://localhost:5173/paySuccess`,
      cancel_url: `http://localhost:5173/checkout`,
    });
    //console.log(session);
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
