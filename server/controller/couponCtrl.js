const Coupon = require('../models/couponModel')
const validateMongoDbId = require('../utils/validateMongodbId')
const asynHandler = require('express-async-handler')

// Vytvoření kupónu
const createCoupon = asynHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
})

// Výpis všech kupónů
const allCoupons = asynHandler(async (req, res) => {
  try {
    const findAllCoupons = await Coupon.find()
    res.json(findAllCoupons)
  } catch (error) {
    throw new Error(error)
  }
})

// Editace konkrétního kupónu
const updateCoupon = asynHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const editCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(editCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

// Vymazání konkrétního kupónu
const deleteCoupon = asynHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const eraseCoupon = await Coupon.findByIdAndDelete(id)
    res.json(eraseCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

// Výpis konkrétního kupónu
const singleCoupon = asynHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const findcoupon = await Coupon.findById(id)
    res.json(findcoupon)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createCoupon,
  allCoupons,
  updateCoupon,
  deleteCoupon,
  singleCoupon
}