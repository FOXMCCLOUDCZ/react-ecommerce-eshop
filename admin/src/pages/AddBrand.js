import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBrand = () => {
  return (
    <div>
        <h3 className='mb-4'>Nový výrobce (brand)</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Zadejte název nového brandu' />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Uložit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBrand