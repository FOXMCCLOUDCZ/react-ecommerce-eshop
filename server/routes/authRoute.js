const express = require("express")
const {
    createUser,
    loginUserCtrl,
    logout,
    updateUser,
    AllUsers,
    SingleUser,
    deleteUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    wishList,
    updateAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    singleOrder,
    allOrders,
    updateOrderStatus
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

// // metoda POST
router.post('/register', createUser)
router.post('/login', loginUserCtrl)
router.post('/admin-login', loginAdmin)
router.post('/cart/applycoupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)
router.post('/cart', authMiddleware, userCart)
router.post('/forgot-password-token', forgotPasswordToken)

// metoda GET
router.get('/logout', logout)
router.get('/all-users', AllUsers)
router.get('/order', authMiddleware, singleOrder)
router.get('/all-orders', authMiddleware, isAdmin, allOrders)
router.get('/wishlist', authMiddleware, wishList)
router.get('/cart', authMiddleware, getUserCart)
router.get('/:id', authMiddleware, isAdmin, SingleUser)
router.get('/refresh', handleRefreshToken)

// metoda PUT
router.put('/reset-password/:token', resetPassword);
router.put('/password', authMiddleware, updatePassword)
router.put('/edit-user', authMiddleware, updateUser)
router.put('/edit-address', authMiddleware, updateAddress)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
router.put('/reset-password/:token', resetPassword)
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)

// metoda DELETE
router.delete('/empty-cart', authMiddleware, emptyCart)
router.delete('/:id', deleteUser)


module.exports = router