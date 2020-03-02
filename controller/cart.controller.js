const db = require('../db')
module.exports.addToCard = (req, res, next) => {

  let productId = req.params.productId
  let sessionId = req.signedCookies.sessionId

  if(!sessionId){
    res.redirect('/products')
    return
  }

  db.get('sessions')
  .find({ id: sessionId})
  .set('cart.' + productId, 1 )
  .write()

  res.redirect('/products')

}