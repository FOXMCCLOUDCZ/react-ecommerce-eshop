import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return (
    <>
      <Meta title={'Přihlásit | UNIXCAR'} />
      <BreadCrumb title='Přihlásit' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Přihlášení</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='email' name='email' label='Emailová adresa' />
                <CustomInput type='password' name='password' label='Heslo' />
                <div>
                  <Link to='/obnovit-heslo'>Zapomněli jste heslo?</Link>
                  <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button
                      className='button border-0'
                      type='submit'
                      >
                        Přihlásit
                    </button>
                    <Link
                      to='/registrace'
                      className='button signup'
                      >
                        Registrace
                    </Link>
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

export default Login