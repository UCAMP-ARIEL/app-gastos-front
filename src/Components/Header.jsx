import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'

export default function Header() {
  const ctx = useContext(UserContext)

  const { logout, authStatus } = ctx

  return (
    <div className='d-flex justify-content-around my-4'>
      <Link to='/'>Inicio</Link>

      {authStatus ? (
        <>
          <Link to='/' onClick={logout}>
            Cerrar sesión
          </Link>
        </>
      ) : (
        <>
          <Link to='/registro'>Registro</Link>

          <Link to='/login'>Iniciar sesión</Link>
        </>
      )}
    </div>
  )
}
