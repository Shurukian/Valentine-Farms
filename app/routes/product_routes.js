const express = require('express')
const passport = require('passport')

const customErrors = ('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const Product = require('../models/product')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// CREATE /product
router.post('/product', requireToken, (req, res, next) => {
  req.body.product.owner = req.user.id

  Product.create(req.body.product)
  // show that the product has been created.
    .then(product => {
      res.status(201).json({ product: product.toObject() })
    })
    .catch(next)
})

// UPDATE /product
router.patch('/product', requireToken, (req, res, next) => {
  delete req.body.product.owner

  Product.findById(req.params.id)
    .then(handle404)
    .then(product => {
      requireOwnership(req, product)

      return product.updateOne(req.body.product)
    })
    .then(() => res.sendStatus(204))

    .catch(next)
})

// INDEX /product
router.get('/product', (req, res, next) => {
  Product.find()
    .then(product => {
      return product.map(product => product.toObject())
    })
    .then(products => res.status(200).json({ products: products }))
    .catch(next)
})

// DESTROY /product
router.delete('/product/:id', requireToken, (req, res, next) => {
  Product.findById(req.params.id)
    .then(handle404)
    .then(product => {
      // requireOwnership(req, product)

      product.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
