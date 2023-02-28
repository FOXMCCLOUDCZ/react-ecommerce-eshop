import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { allProductCategories } from '../features/productcategory/productCategorySlice'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'Index',
      dataIndex: 'key',
    },
    {
      title: 'Název kategorie',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Akce',
      dataIndex: 'action',
    },
  ]

const CategoryList = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(allProductCategories())
      }, [])
  
  const productCategoryState = useSelector((state) => state.productCategory.productCategories)
  const data = []
    for (let i = 0; i < productCategoryState.length; i++) {
        data.push({
          key: i + 1,
          title: productCategoryState[i].title,
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
        <h3 className='mb-4 title'>Seznam kategorií</h3>
        <div>
            <Table
              columns={columns}
              dataSource={data}
            />
        </div>
    </div>
  )
}

export default CategoryList