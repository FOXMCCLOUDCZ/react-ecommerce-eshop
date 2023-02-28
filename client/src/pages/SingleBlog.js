import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
        <Meta title={'Název blogu | UNIXCAR'} />
        <BreadCrumb title='Název blogu' />
        <Container class1='blog-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <Link to='/blogy' className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-4' /> Zpět na blogy
                        </Link>
                        <h3 className='title'>
                            Jak hulit klacky
                        </h3>
                        <img
                            src='public/images/blog-1.jpg'
                            alt='blog'
                            className='img-fluid w-100 my-4'
                        />
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Vivamus ac leo pretium faucibus.
                        </p>
                    </div>
                </div>
                </div>
        </Container>
    </>
  )
}

export default SingleBlog