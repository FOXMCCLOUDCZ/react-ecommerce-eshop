import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
// import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom'
// import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
// import { Link } from 'react-router-dom';
// import watch from '../images/watch.jpg';
import Container from '../components/Container'

const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: 'https://www.alpha-batteries.co.uk/wp-content/uploads/35_0.jpg'
  }

  const [orderedProduct, setorderedProduct] = useState(true)
  
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const closeModal = () => {}

  return (
    <>
        <Meta title={'Název produktu | UNIXCAR'} />
        <BreadCrumb title='Název produktu' />
        <Container class1='main-product-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div>
                  <img
                    src='https://www.alpha-batteries.co.uk/wp-content/uploads/35_0.jpg'
                    alt=''
                    className='img-fluid' />
                </div>
                <div>
                  <img
                    src='https://www.alpha-batteries.co.uk/wp-content/uploads/35_0.jpg'
                    alt=''
                    className='img-fluid' />
                </div>
                <div>
                  <img
                    src='https://www.alpha-batteries.co.uk/wp-content/uploads/35_0.jpg'
                    alt=''
                    className='img-fluid' />
                </div>
                <div>
                  <img
                    src='https://www.alpha-batteries.co.uk/wp-content/uploads/35_0.jpg'
                    alt=''
                    className='img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>
                    Kompletní název
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>cena CZK</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value='5'
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <p className='mb-0 t-review'>( 2 recenze )</p>
                  </div>
                  <a href='#review' className='review-btn'>Napsat recenzi</a>
                </div>
                <div className='py-3'>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Značka:</h3>
                    <p className='product-data'>ATE</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Název:</h3>
                    <p className='product-data'>Brzdové destičky</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Kód produktu:</h3>
                    <p className='product-data'>13.0460-2796.2</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>EAN:</h3>
                    <p className='product-data'>4006633442251</p>
                  </div>
                </div>
                <div className='d-flex align-items-center flex-row mt-2 mb-3 gap-15'>
                  <h3 className='product-heading'>Počet:</h3>
                  <div>
                    <input
                      type='number'
                      name=''
                      min={1}
                      max={16}
                      className='form-control'
                      style={{ width: '70px'}}
                      id=''
                    />
                  </div>
                  <div className='d-flex align-items-center gap-30 ms-5'>
                    <button
                      className='button border-0'
                      // data-bs-toggle='modal'
                      // data-bs-target='#staticBackdrop'
                      type='button'
                      >
                        Přidat do košíku
                    </button>
                    <button
                      className='button signup'
                      >
                        Koupit nyní
                    </button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <a href=''>
                      <TbGitCompare className='fs-5 me-2' /> Přidat k porovnání
                    </a>
                  </div>
                  <div>
                    <a href=''>
                      <AiOutlineHeart className='fs-5 me-2' /> Přidat do oblíbených
                    </a>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center my-3'>
                  <h3 className='product-heading'>Odkaz na produkt:</h3>
                  <a
                    href='javascript:void(0);'
                    onClick={() => {
                      copyToClipboard(
                      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                      )
                    }}
                  >
                    Zkopírovat odkaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='description-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <h4>Popis produktu</h4>
              <div className='bg-white p-3'>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Vivamus ac leo pretium faucibus.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container class1='reviews-wrapper home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 id='review'>Hodnocení</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Hodnocení zákazníků</h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                        count={5}
                        size={24}
                        value='5'
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <p className='mb-0'>Na základě 2 recenzí</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className='text-dark text-decoration-underline' href='/'>Napsat recenzi</a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Napsat recenzi</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value='5'
                        edit={true}
                        activeColor='#ffd700'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='30'
                        rows='4'
                        placeholder='Váš komentář'
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Odeslat</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-4'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Gabriel Hofman</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value='5'
                        edit={false}
                        activeColor='#ffd700'
                      />
                    </div>
                    <p className='mt-3'>
                      Aute et ex nisi elit ipsum aliquip sit laborum aliqua occaecat irure elit consectetur nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default SingleProduct