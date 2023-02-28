import React from 'react'
// import './Dashboard.css'
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import {
  HiArrowTrendingDown
} from 'react-icons/hi2';

const columns = [
  {
    title: 'Objednávka',
    dataIndex: 'key',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Jméno',
    dataIndex: 'name',
  },
  {
    title: 'Produkt',
    dataIndex: 'product',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: 'leden',
      sales: 38,
    },
    {
      type: 'únor',
      sales: 52,
    },
    {
      type: 'březen',
      sales: 61,
    },
    {
      type: 'duben',
      sales: 145,
    },
    {
      type: 'květen',
      sales: 101,
    },
    {
      type: 'červen',
      sales: 80,
    },
    {
      type: 'červenec',
      sales: 65,
    },
    {
      type: 'srpen',
      sales: 71,
    },
    {
      type: 'září',
      sales: 79,
    },
    {
      type: 'říjen',
      sales: 103,
    },
    {
      type: 'listopad',
      sales: 92,
    },
    {
      type: 'prosinec',
      sales: 68,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return '#01975c';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Měsíc',
      },
      sales: {
        alias: 'Prodej v tisících',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className=''>Total</p>
            <h4 className='mb-0'>1100 CZK</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6>
              <HiArrowTrendingDown className='fs-2' /> 32%
            </h6>
            <p className='mb-0'>Compare to April</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className=''>Total</p>
            <h4 className='mb-0'>1100 CZK</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6>
              <HiArrowTrendingDown className='fs-2' /> 32%
            </h6>
            <p className='mb-0'>Compare to April</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className=''>Total</p>
            <h4 className='mb-0'>1100 CZK</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <HiArrowTrendingDown className='fs-2' /> 32%
            </h6>
            <p className='mb-0'>Compare to April</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Nedávné objednávky</h3>
        <div>
          <Table
            columns={columns}
            dataSource={data1} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard