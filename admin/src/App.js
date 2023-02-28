import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import MainLayout from './components/MainLayout'
import Customers from './pages/Customers'
import ProductList from './pages/ProductList'
import CategoryList from './pages/CategoryList'
import AddBrand from './pages/AddBrand'
import BrandList from './pages/BrandList'
import Orders from './pages/Orders'
import AddBlog from './pages/AddBlog'
import BlogList from './pages/BlogList'
import AddBlogCategory from './pages/AddBlogCategory'
import BlogCategoryList from './pages/BlogCategoryList'
import Enquiries from './pages/Enquiries'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='customers' element={<Customers />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='brand-add' element={<AddBrand />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='blog-add' element={<AddBlog />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-add' element={<AddBlogCategory />} />
          <Route path='blog-category-list' element={<BlogCategoryList />} />
          <Route path='enquiries' element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
