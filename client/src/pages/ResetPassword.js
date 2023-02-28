import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
        <Meta title={'Resetování hesla | UNIXCAR'} />
        <BreadCrumb title='Resetování hesla' />
        <Container class1='login-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Resetování hesla</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput type='password' name='password' label='Heslo' />
                            <CustomInput type='password' name='confirmpassword' label='Potvrzení hesla' />
                            <div>
                                <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button
                                    className='button border-0'
                                    type='submit'
                                    >
                                    Potvrdit
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

export default ResetPassword