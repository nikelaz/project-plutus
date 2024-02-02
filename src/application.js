const mongoose = require('mongoose');
require('./models/user');
require('./models/category');
require('./models/budget');
require('./models/transaction');

class Application {
  static async main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/plutus');

    const user = await mongoose.model('User').findOne({ email: 'nikola.n.lazarov@outlook.com' });
    const category = await mongoose.model('Category').findOne({ title: 'Salary' });
    const budget = await mongoose.model('Budget').findById('65bb9c2bb1bb2456320dbf39');
    const spend = await budget.getSpend();
    console.log('spend', spend);
  }
}

module.exports = Application;
