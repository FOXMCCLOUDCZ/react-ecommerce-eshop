import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { allBlogs } from '../features/blog/blogSlice'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'Index',
      dataIndex: 'key',
    },
    {
      title: 'Název',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Kategorie',
      dataIndex: 'category',
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: 'Akce',
      dataIndex: 'action',
    },
  ]

const BlogList = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(allBlogs())
      }, [])
  
  const blogState = useSelector((state) => state.blog.blogs)
  const data = []
    for (let i = 0; i < blogState.length; i++) {
      if (blogState[i].role !== 'admin') {
        data.push({
          key: i + 1,
          title: blogState[i].title,
          category: blogState[i].category,
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

export default BlogList