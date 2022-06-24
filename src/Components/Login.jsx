import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'

export default function Login() {
  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    verifyingToken()

    if (authStatus) {
      navigate('/')
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  return (
    <div className='container'>
      <h2>Iniciar sesión</h2>

      <form onSubmit={(e) => sendData(e)}>
        <FormInput tipo='email' />
        <FormInput tipo='password' />
        <button type='submit' className='btn btn-primary mt-3'>
          Comenzar
        </button>
      </form>
    </div>
  )
}
