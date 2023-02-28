const Enquiry = require('../models/enquiryModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodbId')

// Nový dotaz
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body)
    res.json(newEnquiry)
  } catch (error) {
    throw new Error(error)
  }
})

// Editace dotazu
const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const editEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(editEnquiry)
  } catch (error) {
    throw new Error(error)
  }
})

// Vymazání konkrétního dotazu
const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const eraseEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(eraseEnquiry)
  } catch (error) {
    throw new Error(error)
  }
})

// Vyhledání konkrétního dotazu
const singleEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDbId(id)
  try {
    const findSingleEnquiry = await Enquiry.findById(id);
    res.json(findSingleEnquiry)
  } catch (error) {
    throw new Error(error)
  }
})

// Výpis všech dotazů
const allEnquiry = asyncHandler(async (req, res) => {
  try {
    const findAllEnquiry = await Enquiry.find()
    res.json(findAllEnquiry)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  singleEnquiry,
  allEnquiry,
}