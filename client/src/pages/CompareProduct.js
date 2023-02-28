import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const CompareProduct = () => {
  return (
    <>
      <Meta title={'Porovnat produkty | UNIXCAR'} />
      <BreadCrumb title='Porovnat produkty' />
      <Container class1='compare-product-wrapper home-wrapper py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute cross img-fluid'
              />
              <div className='product-card-image'>
                <div>
                  <img
                    src='images/watch.jpg'
                    alt='watch'
                  />
                </div>
                  <div className='compare-product-detail'>
                  <h5 className='title'>
                    Titulek
                  </h5>
                  <h6 className='price'>10000 CZK</h6>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct