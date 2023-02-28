import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBlogCategory = () => {
  return (
    <div>
        <h3 className='mb-4'>Nová kategorie blogů</h3>
        <div>
            <form action=''>
                <CustomInput type='text' label='Zadejte název kategorie blogů' />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Uložit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBlogCategory