import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import watch from '../images/watch.jpg'
import Container from '../components/Container'

const Checkout = () => {
  return (
    <>
      <Container class1='checkout-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-7'>
            <div className='checkout-left-data'>
              <h3 className='website-name'>UNIXCAR</h3>
              <nav
                style={{ '--bs-breadcrumb-divider': '>' }}
                aria-label='breadcrumb'
              >
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link className='text-dark total-price' to='/kosik'>
                      Košík
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className='breadcrumb-ite total-price active'
                    aria-current='page'
                  >
                    Informace
                  </li>
                  &nbsp; /&nbsp;
                  <li className='breadcrumb-item total-price active'>
                    Doprava
                  </li>
                  &nbsp; /
                  <li
                    className='breadcrumb-item total-price active'
                    aria-current='page'
                  >
                    Způsob platby
                  </li>
                </ol>
              </nav>
              <h4 className='title total'>Kontaktní informace</h4>
              <p className='user-details total'>
                Gabriel Hofman (gabriel.hofman@unixcar.cz)
              </p>
              <h4 className='mb-3'>Doručovací adresa</h4>
              <form
                action=''
                className='d-flex gap-15 flex-wrap justify-content-between'
              >
                <div className='w-100'>
                  <select name='' className='form-control form-select' id=''>
                    <option value='' selected disabled>
                      Vyberte zemi
                    </option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='Jméno'
                    className='form-control'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='Příjmení'
                    className='form-control'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    placeholder='Adresa'
                    className='form-control'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    placeholder='Byt, apartmá atd'
                    className='form-control'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='Město'
                    className='form-control'
                  />
                </div>
                <div className='flex-grow-1'>
                  <select name='' className='form-control form-select' id=''>
                    <option value='' selected disabled>
                      Vyberte stát
                    </option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='PSČ'
                    className='form-control'
                  />
                </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/kosik' className='text-dark'>
                      <BiArrowBack className='me-2' />
                      Návrat do košíku
                    </Link>
                    <Link to='/cart' className='button'>
                      Pokračovat
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-5'>
            <div className='border-bottom py-4'>
              <div className='d-flex gap-10 mb-2 align-align-items-center'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span
                      style={{ top: '-10px', right: '2px' }}
                      className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                    >
                      1
                    </span>
                    <img className='img-fluid' src={watch} alt='product' />
                  </div>
                  <div>
                    <h5 className='total-price'>gfdhgf</h5>
                    <p className='total-price'>s / #agfgfd</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>100 CZK</h5>
                </div>
              </div>
            </div>
            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='total'>Mezisoučet</p>
                <p className='total-price'>1000 CZK</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Doprava</p>
                <p className='mb-0 total-price'>150 CZK</p>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bootom py-4'>
              <h4 className='total'>Celkem</h4>
              <h5 className='total-price'>1150 CZK</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout