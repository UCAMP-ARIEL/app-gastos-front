import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import FormInput from './FormInput'

export default function Register() {
  const userCtx = useContext(UserContext)

  const { registerUser, formData } = userCtx

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
