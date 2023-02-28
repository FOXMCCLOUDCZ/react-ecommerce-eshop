import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../features/customers/customerSlice'

const columns = [
  {
    title: "Zákaznické číslo",
    dataIndex: "key",
  },
  {
    title: "Jméno",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Emailová adresa",
    dataIndex: "email",
  },
  {
    title: "Telefon",
    dataIndex: "phone",
  },
]

const CustomersList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allUsers())
  }, [])

  const customerState = useSelector((state) => state.customer.customers)
  const data = []
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      data.push({
        key: i + 1,
        name: customerState[i].firstname + " " + customerState[i].lastname,
        email: customerState[i].email,
        phone: customerState[i].phone,
      })
    }
  }

  return (
    <div>
        <h3 className='mb-4 title'>Zákazníci</h3>
        <div>
            <Table
                columns={columns}
                dataSource={data} />
        </div>
    </div>
  )
}

export default CustomersList