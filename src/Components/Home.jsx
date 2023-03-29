import React, { useContext, useState, useEffect } from 'react'
import '../styles.css'
import { AppContext } from '../context/globalContext'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom'

export default function Home() {
  const { createBalance, newBalance, setNewBalance, success, error, setError, setSuccess } = useContext(AppContext)
  const { authStatus } = useContext(UserContext)
  const [ok, setOk] = useState(false)

  const handleChange = (event) => {
    setNewBalance({
      ...newBalance,
      [event.target.name]: event.target.value,
    })
  }

  const handleClick = async (event) => {
    setError(false)
    setSuccess(false)
    await handleChange(event)
    setOk(true)
  }

  useEffect(() => {
    ok && createBalance(newBalance)
    setOk(false)
  }, [ok])

  return (
    <div className='container'>
      <h1>Gastos App</h1>
      {authStatus ? (
        <>
          <p className='homeP'>Bienvenido a la aplicación de gastos</p>
          <label for='descripcion'>Descripción</label>
          <input name='descripcion' className='inputP' type='text' onChange={(e) => handleChange(e)} />
          <label for='monto'>Monto</label>
          <input name='monto' className='inputP' type='number' onChange={(e) => handleChange(e)} />
          <div className='row'>
            <button name='tipo' value='ingreso' className='btn btn-success mr-2' onClick={(e) => handleClick(e)}>
              Ingreso
            </button>
            <button name='tipo' value='egreso' className='btn btn-danger' onClick={(e) => handleClick(e)}>
              Egreso
            </button>
          </div>
          <Link to='/historial' className='p-4'>
            Ver balance
          </Link>
          {success && (
            <div className='alert alert-success mt-4' role='alert'>
              Sus datos se guardaron exito
            </div>
          )}
          {error && (
            <div className='alert alert-danger mt-4' role='alert'>
              Hubo un error guardando sus datos
            </div>
          )}
        </>
      ) : (
        <p className='homeP'>Para ver el balance, inicia sesión</p>
      )}
    </div>
  )
}
