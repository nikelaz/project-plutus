const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  budgetId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Budget',
  },
});

mongoose.model('Transaction', transactionSchema);
