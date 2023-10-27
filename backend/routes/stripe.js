const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

const Product = require('../models/Product');
const Order = require('../models/Order');

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

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

  // const paymentIntent = await stripe.paymentIntents.retrieve(
  //   'pi_3Nmc0wLDzGYIsB1H1Z7McWGj'
  // );
  // console.log(paymentIntent);

  //webhook
});

module.exports = router;
