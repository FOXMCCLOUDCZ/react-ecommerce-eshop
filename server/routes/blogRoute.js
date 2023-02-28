const express = require('express')
const {
    createBlog,
    updateBlog,
    SingleBlog,
    AllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
} = require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages')
const router = express.Router()

// metoda POST
router.post('/', authMiddleware, isAdmin, createBlog )

// metoda PUT
router.put('/upload/:id',
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 2),
    blogImgResize,
    uploadImages,
    )
router.put('/likes', authMiddleware, likeBlog )
router.put('/dislikes', authMiddleware, dislikeBlog )
router.put('/:id', authMiddleware, isAdmin, updateBlog )

// metoda GET
router.get('/:id', SingleBlog)
router.get('/', AllBlogs)

// metoda DELETE
router.delete('/:id', authMiddleware, isAdmin, deleteBlog)

module.exports = router