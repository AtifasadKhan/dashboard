import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import './sider.css';

const { Sider } = Layout;

const Siders = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Sider
        width={200}
        className='sider-layout'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
      >
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<UserOutlined />}>
            <Link to='/users'>Users</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<AppstoreAddOutlined />}>
            Add Item
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Siders;
