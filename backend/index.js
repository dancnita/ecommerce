const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const productRoute = require('./routes/product');
const productCategRoute = require('./routes/productCateg');
const stripePayRoute = require('./routes/stripe');
const stripeWebhook = require('./routes/stripeWebhook');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/order');

//const userRoute = require('./routes/user');
//.use() to add middleware to app
//express.json()parses JSON req and puts the parsed data in req.body
//body-parser extracts body portion of request stream and exposes it on req.body.

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});
//app.use(bodyParser.json());
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
app.use('/api', stripeWebhook);
app.use('/api', orderRoute);

//
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
