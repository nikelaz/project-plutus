const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['savings', 'debt', 'income', 'expense'],
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

mongoose.model('Category', categorySchema);
