const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodbId')
const cloudinaryUploadImg = require('../utils/cloudinary')
const fs = require('fs')

// Vytvoření nového článku -- ADMIN
const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})

// Editace konkrétního článku -- ADMIN
const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.json(updateBlog)
    } catch (error) {
        throw new Error(error)
    }
})

// Konkrétní článek s počítadlem shlédnutí
const SingleBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const findBlog = await Blog.findById(id)
            .populate('likes')
            .populate('disLikes')
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc: { numViews: 1 },
            },
            { new: true}
        )
        res.json(findBlog)
    } catch (error) {
        throw new Error(error)
    }
})

// Všechny články
const AllBlogs = asyncHandler(async (req, res) => {
    try {
        const findAllBlog = await Blog.find()
        res.json(findAllBlog)
    } catch (error) {
        throw new Error(error)
    }
})

// Vymazání konkrétního článku -- ADMIN
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const eraseBlog = await Blog.findByIdAndRemove(id)
        res.json(eraseBlog)
    } catch (error) {
        throw new Error(error)
    }
})

// Články - populární
const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body
    validateMongoDbId(blogId)

    // Najděte si blog, který se vám líbí
    const blog = await Blog.findById(blogId)
    // Najděte přihlášeného uživatele
    const loginUserId = req?.user?._id
    // Zjistěte, zda se uživateli blog líbil
    const isLiked = blog?.isLiked
    // Zjistěte, zda se uživateli blog nelíbí
    const alreadyDisLiked = blog?.disLikes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    )
    if (alreadyDisLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            },
            { new: true }
        )
        res.json(blog)
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { likes: loginUserId },
                isLiked: false,
            },
            { new: true }
        )
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: { likes: loginUserId },
                isLiked: true,
            },
            { new: true }
        )
        res.json(blog)
    }
})

// Články - nepopulární
const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body
    validateMongoDbId(blogId)

    // Najděte si blog, který se vám líbí
    const blog = await Blog.findById(blogId)
    // Najděte přihlášeného uživatele
    const loginUserId = req?.user?._id
    // Zjistěte, zda se uživateli blog líbil
    const isDisLiked = blog?.isDisLiked
    // Zjistěte, zda se uživateli blog nelíbí
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    )
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { likes: loginUserId },
                isLiked: false,
            },
            { new: true }
        )
        res.json(blog)
    }
    if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { disLikes: loginUserId },
                isDisLiked: false,
            },
            { new: true }
        )
        res.json(blog)
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: { disLikes: loginUserId },
                isDisLiked: true,
            },
            { new: true }
        )
        res.json(blog)
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
      const findBlog = await Blog.findByIdAndUpdate(
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
      res.json(findBlog)
    } catch (error) {
      throw new Error(error)
    }
  })

module.exports = {
    createBlog,
    updateBlog,
    SingleBlog,
    AllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
}