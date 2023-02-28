import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { allBrands } from '../features/brand/brandSlice'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
    },
    {
      title: 'TecDoc ID',
      dataIndex: 'tecdocId',
      sorter: (a, b) => a.tecdocId.length - b.tecdocId.length,
    },
    {
      title: 'Název',
      dataIndex: 'supplier',
      sorter: (a, b) => a.supplier.length - b.supplier.length,
    },
    {
      title: 'Popis',
      dataIndex: 'description',
    },
    {
      title: 'Akce',
      dataIndex: 'action',
    },
  ]

const BrandList = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(allBrands())
      }, [])
  
  const brandState = useSelector((state) => state.brand.brands)
  const data = []
    for (let i = 0; i < brandState.length; i++) {
      if (brandState[i].role !== 'admin') {
        data.push({
          key: i + 1,
          tecdocId: `${brandState[i].tecdocId}`,
          supplier: brandState[i].supplier,
          description: brandState[i].description,
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
    }
  return (
    <div>
        <h3 className='mb-4 title'>Seznam výrobců (brand)</h3>
        <div>
            <Table
              columns={columns}
              dataSource={data}
            />
        </div>
    </div>
  )
}

export default BrandList