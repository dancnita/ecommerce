const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const productRoute = require('./routes/product');
const productCategRoute = require('./routes/productCateg');
const stripePayRoute = require('./routes/stripe');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/order');

//const userRoute = require('./routes/user');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected:D'))
  .catch((err) => {
    console.log(err);
  });

//

app.use('/api', productRoute);
app.use('/api', productCategRoute);
app.use('/api', stripePayRoute);
app.use('/api', orderRoute);

// app.use('/api', userRoute);

//stripe to move ro stripe.js routes
// const stripe = require('stripe')(
//   'sk_test_51NkJqMLDzGYIsB1HLe16IGEUFXV2n1ff2N1ty5MhEzwzGNITki49qAoWEBLQjxizw4chjlzJ9esB4nqHTRVuBe3r00WZnEc0kx'
// );

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: 'Learn React Today' }],
//   [2, { priceInCents: 20000, name: 'Learn CSS Today' }],
// ]);

// app.post('/create-checkout-session', async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: req.body.items.map((item) => {
//         const storeItem = storeItems.get(item.id);
//         return {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: storeItem.name,
//             },
//             unit_amount: storeItem.priceInCents,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: `http://localhost:5173/Test`,
//       cancel_url: `http://localhost:5173/Test`,
//     });
//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

//
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
