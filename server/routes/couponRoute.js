const express = require("express")
const {
  createCoupon,
  allCoupons,
  singleCoupon,
  updateCoupon,
  deleteCoupon
} = require("../controller/couponCtrl")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/", authMiddleware, isAdmin, createCoupon)
router.get("/", authMiddleware, isAdmin, allCoupons)
router.get("/:id", authMiddleware, isAdmin, singleCoupon)
router.put("/:id", authMiddleware, isAdmin, updateCoupon)
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon)

module.exports = router