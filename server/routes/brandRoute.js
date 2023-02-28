const express = require('express')
const {
    createBrand,
    updateBrand,
    deleteBrand,
    singleBrand,
    allBrands,
    uploadImages,
} = require('../controller/brandCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { brandImgResize, uploadPhoto } = require('../middlewares/uploadImages')
const router = express.Router()

// metoda POST
router.post('/', authMiddleware, isAdmin, createBrand)

// metoda PUT
router.put('/upload/:id',
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 5),
    brandImgResize,
    uploadImages,
    )
router.put('/:id', authMiddleware, isAdmin, updateBrand)

// metoda GET
router.get('/:id', singleBrand)
router.get('/', allBrands)

// metoda DELETE
router.delete('/:id', authMiddleware, isAdmin, deleteBrand)

module.exports = router