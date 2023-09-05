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

//
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
