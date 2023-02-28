import React, { useState } from 'react';
// import './MainLayout.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser
} from 'react-icons/ai';
import {
  BiCategoryAlt
} from 'react-icons/bi';
import {
  FaClipboardList,
  FaBloggerB
} from 'react-icons/fa';
import {
  ImBlog
} from 'react-icons/im';
import {
  IoNotifications
} from 'react-icons/io5';
import {
  SiBrandfolder
} from 'react-icons/si';
import { Outlet } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>UC</span>
            <span className='lg-logo'>Unixcar ADMIN</span>
          </h2>
        </div>
        <Menu className=''
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-2' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-2' />,
              label: 'Zákazníci',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-2' />,
              label: 'Katalog',
              children: [
                {
                  key: 'product-add',
                  icon: <AiOutlineShoppingCart className='fs-2' />,
                  label: 'Nový produkt',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className='fs-2' />,
                  label: 'Seznam produktů',
                },
                {
                  key: 'category-add',
                  icon: <BiCategoryAlt className='fs-2' />,
                  label: 'Nová kategorie',
                },
                {
                  key: 'category-list',
                  icon: <BiCategoryAlt className='fs-2' />,
                  label: 'Seznam kategorií',
                },
                {
                  key: 'brand-add',
                  icon: <SiBrandfolder className='fs-2' />,
                  label: 'Nový výrobce',
                },
                {
                  key: 'brand-list',
                  icon: <SiBrandfolder className='fs-2' />,
                  label: 'Seznam výrobců',
                },
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-2' />,
              label: 'Objednávky',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-2' />,
              label: 'Blog',
              children: [
                {
                  key: 'blog-add',
                  icon: <ImBlog className='fs-2' />,
                  label: 'Nový blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBloggerB className='fs-2' />,
                  label: 'Seznam blogů',
                },
                {
                  key: 'blog-category-add',
                  icon: <ImBlog className='fs-2' />,
                  label: 'Nová kategorie blogů',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBloggerB className='fs-2' />,
                  label: 'Seznam kategorií blogů',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-2' />,
              label: 'Dotazy',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='d-flex justify-content-between ps-1 pe-5' style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger fs-2',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoNotifications className='fs-2' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                <img
                  width={64}
                  height={64}
                  src='https://glenfarrow.co.uk/wp-content/uploads/User-icon.png'
                  alt=''>
                </img>
              </div>
              <div>
                <h5 className='mb-0'>Gabriel Hofman</h5>
                <p className='mb-0'>gabriel.hofman@unixcar.cz</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;