const express = require('express')
const {
    createCategory,
    updateCategory,
    deleteCategory,
    singleCategory,
    allCategories,
} = require('../controller/blogCategoryCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

// metoda POST
router.post('/', authMiddleware, isAdmin, createCategory )

// metoda PUT
router.put('/:id', authMiddleware, isAdmin, updateCategory )

// metoda GET
router.get('/:id', singleCategory )
router.get('/', allCategories)

// metoda DELETE
router.delete('/:id', authMiddleware, isAdmin, deleteCategory)

module.exports = router