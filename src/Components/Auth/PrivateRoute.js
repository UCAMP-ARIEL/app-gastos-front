import React, { useContext, useEffect } from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

export default function PrivateRoute() {
  const userCtx = useContext(UserContext)

  const { authStatus, verifyingToken } = userCtx

  useEffect(() => {
    verifyingToken()
  }, [])

  return authStatus ? <Outlet /> : <Navigate to='/login' replace />
}
