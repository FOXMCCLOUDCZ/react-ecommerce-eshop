import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { allEnquiries } from '../features/enquiry/enquirySlice'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const columns = [
    {
      title: 'Index',
      dataIndex: 'key',
    },
    {
      title: 'Uživatel',
      dataIndex: 'name',
    },
    {
      title: 'Emailová adresa',
      dataIndex: 'email',
    },
    {
      title: 'telefon',
      dataIndex: 'mobile',
    },
    {
      title: 'Komentář',
      dataIndex: 'comment',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Akce',
      dataIndex: 'action',
    },
  ];

  const EnquiriesList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(allEnquiries())
    }, [])
  
    const enquiryState = useSelector((state) => state.enquiry.enquiries)
    const data = []
    for (let i = 0; i < enquiryState.length; i++) {
      if (enquiryState[i].role !== 'admin') {
        data.push({
          key: i + 1,
          name: enquiryState[i].name,
          email: enquiryState[i].email,
          mobile: enquiryState[i].mobile,
          comment: enquiryState[i].comment,
          status: (
            <>
              <select name='' className='form-control form-select' id=''>
                <option value=''>Nastavit status</option>
              </select>
            </>
          ),
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
          <h3 className='mb-4'>Dotazy</h3>
          <div>
              <Table
                  columns={columns}
                  dataSource={data} />
          </div>
      </div>
    )
  }

export default EnquiriesList