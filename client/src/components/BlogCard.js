import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>9.února 2023</p>
        <h5 className='title'>Jak hulit klacky</h5>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Vivamus ac leo pretium faucibus.
        </p>
        <Link to='/blog/:id' className='button'>
          Číst dál...
        </Link>
      </div>
    </div>
  )
}

export default BlogCard