const User = require('../models/userModel')
const Product = require('../models/productModel')
const Cart = require('../models/cartModel')
const Coupon = require('../models/couponModel')
const Order = require('../models/orderModel')
const uniqid = require('uniqid')
const asyncHandler = require('express-async-handler')
const { generateToken } = require('../config/jsonWebToken')
const validateMongoDbId = require('../utils/validateMongodbId')
const { generateRefreshToken } = require('../config/refreshToken')
const jwt = require('jsonwebtoken')
const sendEmail = require('./emailCtrl')
const crypto = require('crypto')

// Vytvoření uživatele
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        // Vytvoření nového uživatele
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        throw new Error('Uživatel již existuje')
    }
})

// Přihlášení uživatele
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // kontrola zda uživatel existuje nebo neexistuje
    const findUser = await User.findOne({ email })
    if(findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id)
        const updateUser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken,
        },
        { new: true })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            areacode: findUser?.areacode,
            phone: findUser?.phone,
            email: findUser?.email,
            street: findUser?.street,
            numberofdescriptive: findUser?.numberofdescriptive,
            city: findUser?.city,
            zipcode: findUser?.zipcode,
            token: generateToken(findUser?._id)
        })
    } else {
        throw new Error('Neplané pověření')
    }
})

// Přihlášení jako ADMIN
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // kontrola zda uživatel existuje nebo neexistuje
    const findAdmin = await User.findOne({ email })
    if(findAdmin.role !== 'admin') throw new Error('Bez autorizace')
    if(findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id)
        const updateUser = await User.findByIdAndUpdate(findAdmin.id, {
            refreshToken: refreshToken,
        },
        { new: true })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            areacode: findAdmin?.areacode,
            phone: findAdmin?.phone,
            email: findAdmin?.email,
            street: findAdmin?.street,
            numberofdescriptive: findAdmin?.numberofdescriptive,
            city: findAdmin?.city,
            zipcode: findAdmin?.zipcode,
            token: generateToken(findAdmin?._id)
        })
    } else {
        throw new Error('Neplané pověření')
    }
})

// Zpracování obnovovacího Tokenu
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if(!cookie?.refreshToken) throw new Error('Žádný obnovovací token v souborech cookies')
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if(!user) throw new Error('V databázi není nebo neodpovídá žádný obnovovací token')
    jwt.verify(refreshToken, process.env.JWT_SECRET,(err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('S obnovovacím tokenem je něco špatně')
        }
        const accessToken = generateToken(user?._id)
        res.json({ accessToken })
    })
})

// Odhlášení

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if(!cookie?.refreshToken) throw new Error('Žádný obnovovací token v souborech cookies')
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({ refreshToken })
    if(!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
        })
        return res.sendStatus(204) // zakázáno
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: '',
    })
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
    })
    res.sendStatus(204) // zakázáno
})

// Editace uživatele
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const editUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                areacode: req?.body?.areacode,
                phone: req?.body?.phone,
                email: req?.body?.email,
                street: req?.body?.street,
                numberofdescriptive: req?.body?.numberofdescriptive,
                city: req?.body?.city,
                zipcode: req?.body?.zipcode,
            },
            {
                new: true,
            }
        )
        res.json(editUser)
    } catch (error) {
        throw new Error(error)
    }
})

// Uložení adresy uživatele
const updateAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const editAddress = await User.findByIdAndUpdate(
            _id,
            {
                street: req?.body?.street,
                numberofdescriptive: req?.body?.numberofdescriptive,
                city: req?.body?.city,
                zipcode: req?.body?.zipcode,
            },
            {
                new: true,
            }
        )
        res.json(editAddress)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis všech uživatelů
const AllUsers = asyncHandler(async (req, res) => {
    try {
        const findAllUsers = await User.find()
        res.json(findAllUsers)
    } catch (error) {
        throw new Error(error)
    }
})

// Výpis jednoho uživatele podle ID
const SingleUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const findSingleUser = await User.findById(id)
        res.json(findSingleUser)
    } catch (error) {
        throw new Error(error)
    }
})

// Vymazaní uživatele podle ID
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.json({
            deleteUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Blokování uživatele
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        )
        res.json({
            message: 'Uživatel blokován'
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Odblokování uživatele
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        )
        res.json({
            message: 'Uživatel odblokován'
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Změna hesla uživatele
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { password } = req.body
    validateMongoDbId(_id)
    const user = await User.findById(_id)
    if (password) {
        user.password = password
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    } else {
        res.json(user)
    }
})

// Zapomenuté heslo
const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email }  = req.body
    const user = await User.findOne({ email })
    if (!user) throw new Error('Uživatel s tímto e-mailem nebyl nalezen')
    try {
        const token = await user.createPasswordResetToken()
        await user.save()
        const resetURL = `Dobrý den, tento odkaz resetuje Vaše heslo. Platnost tohoto odkazu je platný 10 minut od této chvíle. <a href='http://localhost:5000/api/user/reset-password/${token}'>Klikněte ZDE</a>`
        const data = {
            to: email,
            text: 'Milý uživateli',
            subject: 'Zapomenuté heslo',
            htm: resetURL,
        }
        sendEmail(data)
        res.json(token)
    } catch (error) {
        throw new Error(error)
    }
})

// Resetování hesla
const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error('Platnost tokenu vypršela, zkuste to znovu později');
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
  });

  // Seznam přání uživatele
  const wishList = asyncHandler(async (req, res) => {
    const { _id } = req.user
    try {
        const findUser = await User.findById(_id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
  })

// Nákupní košík uživatele - přidání produktů
const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        let products = []
        const user = await User.findById(_id)
        // Kontrola, zda produkt již není obsažen v košíku
        const alreadyExistCart = await Cart.findOne({ orderby: user._id })
        if (alreadyExistCart) {
            alreadyExistCart.remove()
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {}
            object.product = cart[i]._id
            object.count = cart[i].count
            let getPrice = await Product.findById(cart[i]._id).select('price').exec()
            object.price = getPrice.price
            products.push(object)
        }
        console.log(products)
        let cartTotal = 0
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user?._id,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error)
    }
  })

// Nákupní košík uživatele - seznam produktů
const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
      const cart = await Cart.findOne({ orderby: _id }).populate('products.product')
      res.json(cart)
    } catch (error) {
        throw new Error(error)
    }
  });
  
  // Vypráznit košík uživatele
  const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
      const user = await User.findOne({ _id })
      const cart = await Cart.findOneAndRemove({ orderby: user._id })
      res.json(cart)
    } catch (error) {
      throw new Error(error)
    }
  })

// Uplatnění kupónu
const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body
    const { _id } = req.user
    validateMongoDbId(_id)
    const validCoupon = await Coupon.findOne({ name: coupon })
    console.log(validCoupon)
    if (validCoupon === null) {
      throw new Error('Neplatný kupón')
    }
    const user = await User.findOne({ _id })
    let { cartTotal } = await Cart.findOne({
      orderby: user._id,
    }).populate('products.product')
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2)
    await Cart.findOneAndUpdate(
      { orderby: user._id },
      { totalAfterDiscount },
      { new: true }
    )
    res.json(totalAfterDiscount)
})
  
// Vytvoření objednávky
const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
      if (!COD) throw new Error('Vytvoření dobírky se nezdařilo')
      const user = await User.findById(_id)
      let userCart = await Cart.findOne({ orderby: user._id })
      let finalAmout = 0
      if (couponApplied && userCart.totalAfterDiscount) {
        finalAmout = userCart.totalAfterDiscount
      } else {
        finalAmout = userCart.cartTotal
      }
  
      let newOrder = await new Order({
        products: userCart.products,
        paymentIntent: {
          id: uniqid(),
          method: 'COD',
          amount: finalAmout,
          status: 'Dobírka',
          created: Date.now(),
          currency: 'czk',
        },
        orderby: user._id,
        orderStatus: 'Dobírka',
      }).save()
      let update = userCart.products.map((item) => {
        return {
          updateOne: {
            filter: { _id: item.product._id },
            update: { $inc: { quantity: -item.count, sold: +item.count } },
          },
        }
      })
      const updated = await Product.bulkWrite(update, {})
      res.json({ message: 'V pořádku' })
    } catch (error) {
      throw new Error(error)
    }
})

// Zobrazení objednávky
const singleOrder = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
      const userorders = await Order.findOne({ orderby: _id })
        .populate('products.product')
        .populate('orderby')
        .exec()
      res.json(userorders)
    } catch (error) {
      throw new Error(error)
    }
})
  
const allOrders = asyncHandler(async (req, res) => {
    try {
        const allUserOrders = await Order.find()
        .populate('products.product')
        .populate('orderby')
        .exec()
        res.json(allUserOrders)
    } catch (error) {
        throw new Error(error)
    }
})

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body
    const { id } = req.params
    validateMongoDbId(id)
    try {
      const updateOrderStatus = await Order.findByIdAndUpdate(
        id,
        {
        orderStatus: status,
        paymentIntent: {
            status: status,
        },
        },
        { new: true }
      )
      res.json(updateOrderStatus)
    } catch (error) {
      throw new Error(error)
    }
})

module.exports = {
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
    updateOrderStatus,
}