import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'antd/dist/reset.css';
import Headers from './modules/header/header';
import Siders from './modules/sider/sider';
import Home from '../src/modules/home/home';
import Users from '../src/modules/users/users';

import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Headers />
        <Layout>
          <Siders />
          <Layout
          // className='site-layout-background'
          >
            <Content className='content-height'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
