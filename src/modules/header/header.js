import { Row, Avatar, Layout, Col } from 'antd';
import './header.css';
import {
  UserOutlined,
  SettingOutlined,
  MailOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const Headers = () => {
  return (
    <div>
      <Header className='header-width'>
        <div className='header-content'>
          <h2>logo</h2>
          <Row gutter={5}>
            <Col>
              <Avatar size={36} className='avatar' icon={<MailOutlined />} />
            </Col>
            <Col>
              <Avatar size={36} className='avatar' icon={<SettingOutlined />} />
            </Col>
            <Col>
              <Avatar
                size={36}
                className='avatar'
                icon={<NotificationOutlined />}
              />
            </Col>
            <Col>
              <Avatar size={36} className='avatar' icon={<UserOutlined />} />
            </Col>
          </Row>
        </div>
      </Header>
    </div>
  );
};

export default Headers;
