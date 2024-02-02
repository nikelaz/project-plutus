const generateInvalidMessage = (field) => `${field} is invalid`;

const validators = {
  email: (input) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/.test(input),
  password: (input) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(input),
};

module.exports = {
  validators,
  generateInvalidMessage,
};
