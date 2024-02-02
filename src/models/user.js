const mongoose = require('mongoose');
const { validators, generateInvalidMessage } = require('../helpers/validators');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: validators.email,
      message: generateInvalidMessage('Email'),
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: validators.password,
      message: generateInvalidMessage('Password'),
    },
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

mongoose.model('User', userSchema);
