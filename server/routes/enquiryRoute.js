const express = require('express');
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  singleEnquiry,
  allEnquiry,
} = require('../controller/enquiryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/', createEnquiry)
router.put('/:id', authMiddleware, isAdmin, updateEnquiry)
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry)
router.get('/:id', singleEnquiry)
router.get('/', allEnquiry)

module.exports = router