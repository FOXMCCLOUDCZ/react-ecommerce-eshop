import React from 'react'

const CustomInput = (props) => {
    const { type, name, label, classname } = props
  return (
    <div className='form-floating'>
        <input
            type={type}
            name={name}
            placeholder={label}
            className={`form-control ${classname}`}
        />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CustomInput