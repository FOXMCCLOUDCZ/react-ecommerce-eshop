import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='o-nas' element={<About />} />
            <Route path='kontakt' element={<Contact />} />
            <Route path='produkty' element={<OurStore />} />
            <Route path='produkty/:id' element={<SingleProduct />} />
            <Route path='blogy' element={<Blogs />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='kosik' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='porovnat-produkty' element={<CompareProduct />} />
            <Route path='oblibene' element={<Wishlist />} />
            <Route path='prihlasit' element={<Login />} />
            <Route path='obnovit-heslo' element={<ForgotPassword />} />
            <Route path='registrace' element={<SignUp />} />
            <Route path='reset-hesla' element={<ResetPassword />} />
            <Route path='zasady-ochrany-osobnich-udaju' element={<PrivacyPolicy />} />
            <Route path='zasady-vraceni-penez' element={<RefundPolicy />} />
            <Route path='zasady-dopravy' element={<ShippingPolicy />} />
            <Route path='vseobecne-obchodni-podminky' element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
