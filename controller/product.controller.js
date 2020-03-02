const Product = require('../models/product.model')

module.exports.index = (req, res) =>{
  // let page = parseInt(req.query.page )|| 1 //n
  // let perPage = 8 //x
  // let start = (page - 1) * perPage
  // let end = page * perPage
  // res.render('products/index', {
  //   //products: db.get('products').value().slice(start, end)
  //   products: db.get('products').drop(start).take(perPage).value()
  // })
  Product.find().then((products) => {
    res.render('products/index',{
      products: products
    })
  })

}