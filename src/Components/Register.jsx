import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import FormInput from './FormInput'

export default function Register() {
  const userCtx = useContext(UserContext)

  const { authStatus, registerUser, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    if (authStatus) navigate('/')
  }, [authStatus])

  const sendData = (event) => {
    event.preventDefault()
    registerUser(formData)
  }

  return (
    <div className='container'>
      <h2>Crear cuenta</h2>

      <form onSubmit={(e) => sendData(e)}>
        <FormInput tipo='username' />
        <FormInput tipo='email' />
        <FormInput tipo='password' />

        <button type='submit' className='btn btn-primary mt-3'>
          Registrarme
        </button>
      </form>
    </div>
  )
}
