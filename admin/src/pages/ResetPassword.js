import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <div className='py-5' style={{ background: '#01975c', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Resetování hesla</h3>
        <p className='text-center'>Zadejte prosím nové heslo</p>
        <form action=''>
          <CustomInput type='password' label='Nové heslo' id='password' />
          <CustomInput type='password' label='Potvrzení hesla' id='confirpassword' />
          <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{ background: '#01975c' }} type='submit'>
            Odeslat
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword