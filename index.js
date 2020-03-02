// CRUD ---- CREATE ---- RETRIEVE ---- UPDATE -- DELETE
require('dotenv').config()
console.log(process.env.SESSION_SECRET)

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csurf = require('csurf')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-demo', {useNewUrlParser: true})

const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route') 
const productRoutes = require('./routes/product.route')
const cartRoute = require('./routes/cart.route')
const transferRoute = require('./routes/transfer.route')
const apiRoute = require('./api/routes/product.route')

const authMiddleware = require('./middleware/auth.middleware')
const sessionMiddleware = require('./middleware/session.middleware')

const port = 3000
const app = express()


app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 
app.use('/api/products', apiRoute)
app.use(express.static('public'))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMiddleware)
//app.use(csurf({ cookie: true}))

app.set('view engine', 'pug')
app.set('views', './views')
    
app.get('/' , (req, res) => {
  res.render('index', {
    var1: "i love you 3000"
    })
})
app.get('/styles/custom.css', (req, res) =>{
  res.send('abcdef')
})

app.use('/users',authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoute)
app.use('/transfer', authMiddleware.requireAuth, transferRoute)



app.listen(port, () => {
  console.log('server listen in port ' + port)
})
