const mongooes = require('mongoose')
const userSchema = new mongooes.Schema({
  email: String,
  password: String,
  name: String,
  avatar: String,
  phone: String
})

const User = mongoose.model('User', userSchema, 'users')

module.exports = User;