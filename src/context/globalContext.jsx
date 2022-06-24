import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [newBalance, setNewBalance] = useState()
  const [balance, setBalance] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const createBalance = async (dataForm) => {
    const form = {
      descripcion: dataForm.descripcion,
      monto: dataForm.monto,
      tipo: dataForm.tipo,
    }

    try {
      await clienteAxios.post(`/balance/nuevo`, form)
      setSuccess(true)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const getBalance = async () => {
    try {
      const res = await clienteAxios.get(`/balance/obtener`)
      setBalance(res.data.balance)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBalance = async (id) => {
    const data = { id }

    try {
      await clienteAxios.delete(`/balance/borrar`, { data })
      getBalance()
    } catch (error) {
      console.log(error)
    }
  }

  const data = {
    createBalance,
    getBalance,
    balance,
    setBalance,
    newBalance,
    setNewBalance,
    success,
    error,
    setSuccess,
    setError,
    deleteBalance,
  }
  console.log('CONTEXTO', data)
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
