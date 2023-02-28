import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let schema = Yup.object().shape({
    email: Yup.string()
      .email('Emailová adresa musí být platná')
      .required('Emailová adresa je povinná'),
    password: Yup.string().required('Heslo je povinné'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
    }
  })

  const authState = useSelector((state) => state)

  const { user, isError, isSuccess, isLoading, message} = authState.auth
    
    
    useEffect(() => {
      if (isSuccess) {
        navigate('admin')
      } else {
        navigate('')
      }
    }, [user, isError, isSuccess, isLoading])

  return (
    <div className='py-5' style={{ background: '#01975c', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Přihlášení ADMIN</h3>
        <p className='text-center'>Chcete-li pokračovat, přihlaste se ke svému účtu</p>
        <div className='error text-center'>
          {message.message === 'Přístup zamítnut' ? 'Nemáte oprávnění ADMIN' : ''}
        </div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type='text'
            name='email'
            label='Emailová adresa'
            id='email'
            val={formik.values.email}
            onCh={formik.handleChange('email')}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type='password'
            name='password'
            label='Heslo'
            id='password'
            val={formik.values.password}
            onCh={formik.handleChange('password')}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mb3 text-end'>
            <Link to='forgot-password'>
              Zapomenuté heslo?
            </Link>
          </div>
          <div className='border-0 px-3 py-2 text-center' style={{ background: '#01975c', Width: '100%' }}>
            <button 
          className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
          style={{ background: '#01975c' }}
          type='submit'>
            Přihlásit
          </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login