import React, { useEffect, useContext, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/globalContext'

export default function Historial() {
  const { getBalance, balance, deleteBalance } = useContext(AppContext)

  useEffect(() => {
    getBalance()
  }, [])

  const data = () => {
    return balance.map((item) => {
      const handleTipo = () => {
        if (item.tipo === 'ingreso') {
          return <p className='text-success m-0'>INGRESO</p>
        } else if (item.tipo === 'egreso') {
          return <p className='text-danger m-0'>EGRESO</p>
        }
      }

      return {
        descripcion: item.descripcion,
        monto: `$ ${item.monto}`,
        tipo: handleTipo(),
        delete: <i onClick={() => deleteBalance(item._id)} className='bi bi-trash3-fill' />,
      }
    })
  }
  const columns = [
    {
      dataField: 'descripcion',
      text: 'Descripción',
    },
    {
      dataField: 'tipo',
      text: 'Movimiento',
    },
    {
      dataField: 'monto',
      text: 'Importe',
    },
    {
      dataField: 'delete',
      text: 'X',
    },
  ]

  return (
    <>
      <BootstrapTable keyField='id' data={balance ? data() : []} columns={columns} noDataIndication='Sin Datos' hover />
      <Link to='/' className='btn btn-secondary d-flex justify-content-center'>
        Volver
      </Link>
    </>
  )
}
