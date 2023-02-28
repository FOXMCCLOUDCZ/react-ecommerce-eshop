const Brand = require('../models/brandModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodbId')
const cloudinaryUploadImg = require('../utils/cloudinary')
const fs = require('fs')

// Vytvoření nové produktové kategorie -- ADMIN
const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body)
        res.json(newBrand)
    } catch (error) {
        throw new Error (error)
    }
})

// Editace konkrétní produktové kategorie
const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const editBrand = await Brand.findByIdAndUpdate(id, req.body, {
        new: true,
    })
    res.json(editBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Vymazání konkrétní produktové kategorie
const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const eraseBrand = await Brand.findByIdAndDelete(id)
    res.json(eraseBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis konkrétní produktové kategorie
const singleBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const findBrand = await Brand.findById(id)
    res.json(findBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis všech produktových kategorií
const allBrands = asyncHandler(async (req, res) => {
    try {
    const findAllBrands = await Brand.find()
    res.json(findAllBrands)
    } catch (error) {
        throw new Error(error)
    }
})

// Náhraní obrázků na cloud
const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
      const uploader = (path) => cloudinaryUploadImg(path, 'images')
      const urls = []
      const files = req.files
      for (const file of files) {
        const { path } = file
        const newpath = await uploader(path)
        urls.push(newpath)
        fs.unlinkSync(path)
      }
      const findBrand = await Brand.findByIdAndUpdate(
        id,
        {
        images: urls.map((file) => {
          return file
        }),
      },
      {
        new: true,
      }
      )
      res.json(findBrand)
    } catch (error) {
      throw new Error(error)
    }
  })

module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    singleBrand,
    allBrands,
    uploadImages,
}