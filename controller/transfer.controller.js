const shortid = require('shortid')
const db = require('../db')

module.exports.create = (req, res, next) => {
  res.render('transfer/create', {
    csrfToken: req.csrfToken()
  })
}
module.exports.postCreate = (req, res, next) => {
  let data = {
    id: shortid.generate(),
    amount: parseInt(req.body.amount),
    account: req.body.accountId,
    userId: req.signedCookies.userId 
  }
  db.get('transfer').push(data).write()
  res.redirect('/transfer/create')
}