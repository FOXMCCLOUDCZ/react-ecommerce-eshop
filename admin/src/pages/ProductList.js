import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../features/product/productSlice'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
    },
    {
      title: 'Kód produktu',
      dataIndex: 'partnumber',
      sorter: (a, b) => a.partnumber.length - b.partnumber.length,
    },
    {
      title: 'Značka',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: 'Kategorie',
      dataIndex: 'category',
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: 'Množství',
      dataIndex: 'quantity',
    },
    {
      title: 'Cena',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Akce',
      dataIndex: 'action',
    },
  ];

const ProductList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allProducts())
  }, [])

  const productState = useSelector((state) => state.product.products)
  const data = []
  for (let i = 0; i < productState.length; i++) {
    if (productState[i].role !== 'admin') {
      data.push({
        key: i + 1,
        partnumber: productState[i].partnumber,
        brand: productState[i].brand,
        category: productState[i].category,
        quantity: productState[i].quantity,
        price: `${productState[i].price}`,
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
        <h3 className='mb-4 title'>Seznam produktů</h3>
        <div>
            <Table
                columns={columns}
                dataSource={data} />
        </div>
    </div>
  )
}

export default ProductList