import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <div className='py-5' style={{ background: '#01975c', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Zapomenuté heslo</h3>
        <p className='text-center'>Zadejte prosím svůj registrační e-mail, abyste obdrželi e-mail pro obnovení hesla</p>
        <form action=''>
          <CustomInput type='text' label='Emailová adresa' id='email' />
          <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{ background: '#01975c' }} type='submit'>
            Odeslat
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword