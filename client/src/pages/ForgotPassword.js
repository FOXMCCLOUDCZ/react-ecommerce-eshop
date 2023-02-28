import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Obnova helsa | UNIXCAR'} />
      <BreadCrumb title='Obnovit heslo' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Obnova hesla</h3>
              <p className='text-center mt-2 mb-3'>
                Bude Vám zaslán email pro obnovení Vašeho hesla
              </p>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='email' name='email' label='Emailová adresa' />
                <div>
                  <div className=' mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                    <button className='button border-0'>Odeslat</button>
                    <Link to='/prihlasit'>Zrušit</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword