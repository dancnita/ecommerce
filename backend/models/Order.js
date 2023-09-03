const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    savedShippingDetails: {
      firstName: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z]{2,10}/.test(v);
          },
          message: (props) => `${props.value} is not a valid First Name!`,
        },
        required: true,
      },
      lastName: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z]{2,10}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Last Name!`,
        },
        required: true,
      },
      email: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Email!`,
        },
        required: true,
      },
      phone: {
        type: Number,
        validate: {
          validator: function (v) {
            return /[0-9]{10,12}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Phone no.!`,
        },
        required: true,
      },
      address1: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z0-9]{5,20}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Address!`,
        },
        required: true,
      },
      address2: { type: String, required: false },
    },
    savedBillingDetails: {
      firstName: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z]{2,10}/.test(v);
          },
          message: (props) => `${props.value} is not a valid First Name!`,
        },
        required: true,
      },
      lastName: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z]{2,10}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Last Name!`,
        },
        required: true,
      },
      email: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Email!`,
        },
        required: true,
      },
      phone: {
        type: Number,
        validate: {
          validator: function (v) {
            return /[0-9]{10,12}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Phone no.!`,
        },
        required: true,
      },
      address1: {
        type: String,
        validate: {
          validator: function (v) {
            return /[a-zA-Z0-9]{5,20}/.test(v);
          },
          message: (props) => `${props.value} is not a valid Address!`,
        },
        required: true,
      },
      address2: { type: String, required: false },
    },

    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: { type: Number, default: 1, required: true },
      },
    ],

    amount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
