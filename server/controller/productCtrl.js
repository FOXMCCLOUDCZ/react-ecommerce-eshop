const Product = require('../models/productModel')
const User = require("../models/userModel")
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const validateMongoDbId = require('../utils/validateMongodbId')
const cloudinaryUploadImg = require('../utils/cloudinary')
const fs = require('fs')

// Vytvoření produktu -- ADMIN
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Editace produktu -- ADMIN
const updateProduct = asyncHandler(async (req, res) => {
    const id = await Product.findById(req.params.id)
    validateMongoDbId(id)
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const editProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(editProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis jednoho produktu podle ID
const getSingleProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis všech produktů
const getAllProduct = asyncHandler(async (req, res) => {
    try {
        // filtrování
        const queryObj = { ...req.query }
        const excludeFields = ['page', 'sort', 'limit', 'fields']
        excludeFields.forEach((el) => delete queryObj[el])
        console.log(queryObj)
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        
        let query = Product.find(JSON.parse(queryStr))

        // Třídění
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ")
            query = query.sort(sortBy)
        } else {
            query = query.sort("-createdAt")
        }

        // Omezení polí
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ")
            query = query.select(fields)
        } else {
            query = query.select("-__v")
        }

        // Stránkování
        const page = req.query.page
        const limit = req.query.limit
        const skip = (page - 1) * limit
        query = query.skip(skip).limit(limit)
        if (req.query.page) {
            const productCount = await Product.countDocuments()
            if (skip >= productCount) throw new Error('Tato stránka neexistuje')
        }
        console.log(page, limit, skip)

        const product =  await query
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})

// Vymazání produktu -- ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
    const id = await Product.findById(req.params.id)
    validateMongoDbId(id)
    try {
        const eraseProduct = await Product.findByIdAndDelete(id)
        res.json(eraseProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Seznam přání
const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { productId } = req.body
    try {
      const user = await User.findById(_id)
      const alreadyadded = user.wishlist.find((id) => id.toString() === productId)
      if (alreadyadded) {
        let user = await User.findByIdAndUpdate(
          _id,
          {
            $pull: { wishlist: productId },
          },
          {
            new: true,
          }
        )
        res.json(user)
      } else {
        let user = await User.findByIdAndUpdate(
          _id,
          {
            $push: { wishlist: productId },
          },
          {
            new: true,
          }
        );
        res.json(user)
      }
    } catch (error) {
      throw new Error(error)
    }
})

// Hodnocení
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body
  try {
    const product = await Product.findById(productId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getAllRatings = await Product.findById(productId)
    let totalRating = getAllRatings.ratings.length
    let ratingSum = getAllRatings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0)
    let actualRating = Math.round(ratingSum / totalRating)
    let finalProduct = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalProduct)
  } catch (error) {
    throw new Error(error)
  }
})

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
    const findProduct = await Product.findByIdAndUpdate(
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
    res.json(findProduct)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
    createProduct,
    getSingleProduct,
    getAllProduct,
    updateProduct,    
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages
}