import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/product/productSlice'
import brandReducer from '../features/brand/brandSlice'
import productCategoryReducer from '../features/productcategory/productCategorySlice'
import blogReducer from '../features/blog/blogSlice'
import blogCategoryReducer from '../features/blogcategory/blogCategorySlice'
import enquiryReducer from '../features/enquiry/enquirySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    productCategory: productCategoryReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    enquiry: enquiryReducer,
  },
})