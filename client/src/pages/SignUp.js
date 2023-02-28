import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
      <Meta title={'Registrace | UNIXCAR'} />
      <BreadCrumb title='Registrace' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Registrace</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='text' name='firstname' label='Jméno' />
                <CustomInput type='text' name='lastname' label='Příjmení' />
                <CustomInput type='email' name='email' label='Emailová adresa' />
                <CustomInput type='tel' name='mobile' label='Telefonní kontakt' />
                <CustomInput type='password' name='password' label='Heslo' />
                <div>
                  <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button
                      className='button border-0'
                      type='submit'
                      >
                        Registrovat
                    </button>
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

export default Signup