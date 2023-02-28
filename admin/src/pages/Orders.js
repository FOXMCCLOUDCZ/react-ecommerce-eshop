import React, { useEffect } from 'react'
import { Table } from 'antd'
import { getOrders } from "../features/auth/authSlice"
import { useDispatch, useSelector } from 'react-redux'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'Index',
      dataIndex: 'key',
    },
    {
      title: 'Jméno',
      dataIndex: 'name',
    },
    {
      title: 'Datum vytvoření',
      dataIndex: 'createdAt',
    },
    {
      title: 'Produkt',
      dataIndex: 'product',
    },
    {
      title: 'Platební metoda',
      dataIndex: 'status',
    },
    {
      title: 'Celková cena',
      dataIndex: 'price',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const Orders = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrders())
      }, [])
  
  const orderState = useSelector((state) => state.auth.orders)
  const data = []
    for (let i = 0; i < orderState.length; i++) {
      data.push({
        key: i + 1,
        name: orderState[i].orderby.firstname + " " + orderState[i].orderby.lastname,
        date: new Date(orderState[i].createdAt).toLocaleString(),
        product: orderState[i].products.map((i) => {
          return <p>{i.product.title}</p>
        }),
        status: orderState[i].paymentIntent.status,
        price: orderState[i].paymentIntent.amount,
        
        action: (
          <>
            <Link to='/' className='fs-4 text-primary'>
              <MdModeEdit />
            </Link>
            <Link className='ms-3 fs-4 text-danger' to='/'>
              <MdDelete />
            </Link>
          </>
        ),
      })
    }
  return (
    <div>
        <h3 className='mb-4 title'>Objednávky</h3>
        <div>
            <Table
              columns={columns}
              dataSource={data}
            />
        </div>
    </div>
  )
}

export default Orders