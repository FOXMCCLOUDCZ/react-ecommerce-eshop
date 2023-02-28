import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      <Meta title={'Autodíly Ostrava | UNIXCAR'} />
        <Container class1='home-wrapper-1 py-5'>
          <div className='row'>
            <div className='col'>
              <div className='main-banner position-relative p-3'>
                <img
                src='images/main-banner.jpg'
                className='img-fluid rounded-3'
                alt='Hlavní banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>Text</h4>
                  <h5>Název</h5>
                  <p>Cena</p>
                  <Link className="button">Objednat</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Text</h4>
                    <h5>Název</h5>
                    <p>Cena</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Text</h4>
                    <h5>Název</h5>
                    <p>Cena</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Text</h4>
                    <h5>Název</h5>
                    <p>Cena</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Text</h4>
                    <h5>Název</h5>
                    <p>Cena</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                {services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='služby' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
        <Container class1='home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories'>
                
              </div>
            </div>
          </div>
        </Container>
        <Container class1='popular-wrapper py-5 home-wrapper-2 d-none d-xxl-block'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Nejoblíbenější produkty</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
        <Container class1='marque-wrapper py-5 d-none d-xxl-block'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='blog-wrapper py-5 home-wrapper-2 d-none d-xxl-block'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Naše nejnovější blogy</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </Container>
    </>
  )
}

export default Home