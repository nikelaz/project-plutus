const mongoose = require('mongoose');

const { Schema } = mongoose;

const budgetSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  month: {
    type: Date,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}, {
  methods: {
    async getTransactions() {
      const transactions = await mongoose.model('Transaction').find({ budgetId: this._id });
      return transactions;
    },
    async getSpend() {
      const transactions = await this.getTransactions();
      return transactions.reduce((acc, curr) => acc + curr.amount, 0)
    },
  }
});

mongoose.model('Budget', budgetSchema);
