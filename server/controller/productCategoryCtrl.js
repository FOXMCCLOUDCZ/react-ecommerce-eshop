const Category = require('../models/productCategoryModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodbId')

// Vytvoření nové produktové kategorie -- ADMIN
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error (error)
    }
})

// Editace konkrétní produktové kategorie
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const editCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
    })
    res.json(editCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Vymazání konkrétní produktové kategorie
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const eraseCategory = await Category.findByIdAndDelete(id)
    res.json(eraseCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis konkrétní produktové kategorie
const singleCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
    const findCategory = await Category.findById(id)
    res.json(findCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis všech produktových kategorií
const allCategories = asyncHandler(async (req, res) => {
    try {
    const findAllCategories = await Category.find()
    res.json(findAllCategories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    singleCategory,
    allCategories,
}