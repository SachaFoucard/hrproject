const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true // Use 'required' instead of 'require'
  },
  lastname: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  codepostal: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: { // Correct the property name from 'adress' to 'address'
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: false
  }
});

const UserModel = mongoose.model('User', schema); // Use 'User' as the model name instead of 'users'

module.exports = UserModel;
