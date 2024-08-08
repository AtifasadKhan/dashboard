import {
  Row,
  Col,
  Card,
  Statistic,
  Progress,
  Table,
  Tag,
  Rate,
  List,
  Avatar,
} from 'antd';
import {
  ShoppingCartOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import './home.css';

const Home = () => {
  const feedbackData = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      rating: 4,
      feedback: 'Great service and delicious food!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
      rating: 5,
      feedback: 'Absolutely loved it! Will come back for sure.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      avatar: 'https://via.placeholder.com/150',
      rating: 3,
      feedback: 'It was okay, could be better.',
    },
  ];
  const tableData = [
    {
      key: '1',
      customer: 'John Doe',
      orderNumber: '12345',
      amount: '$50.00',
      status: 'Delivered',
    },
    {
      key: '2',
      customer: 'Jane Smith',
      orderNumber: '12346',
      amount: '$30.00',
      status: 'Cancelled',
    },
    {
      key: '3',
      customer: 'Sam Green',
      orderNumber: '12347',
      amount: '$20.00',
      status: 'Pending',
    },
  ];
  const OrderStatusTag = ({ status }) => {
    let color = 'red';
    if (status === 'Delivered') {
      color = 'green';
    }

    return <Tag color={color}>{status}</Tag>;
  };
  const data = [
    {
      title: 'Total Orders',
      value: 1200,
      icon: <ShoppingCartOutlined style={{ fontSize: '24px' }} />,
    },
    {
      title: 'Total Delivery',
      value: 1150,
      icon: <CheckCircleOutlined style={{ fontSize: '24px' }} />,
    },
    {
      title: 'Total Cancelled',
      value: 50,
      icon: <CloseCircleOutlined style={{ fontSize: '24px' }} />,
    },
    {
      title: 'Total Revenue',
      value: '$30,000',
      icon: <DollarOutlined style={{ fontSize: '24px' }} />,
    },
  ];

  const dataGraph = [
    { date: '2024-01-01', value: 30 },
    { date: '2024-02-01', value: 45 },
    { date: '2024-03-01', value: 60 },
    { date: '2024-04-01', value: 50 },
    { date: '2024-05-01', value: 30 },
  ];

  const config = {
    data: dataGraph,
    isStack: false,
    xField: 'date',
    yField: 'value',
    seriesField: 'date',
    colorField: 'date',
    legend: false,
    meta: {
      date: { alias: 'Date' },
      value: { alias: 'Value' },
    },
  };
  return (
    <>
      <h1>Dashboard</h1>
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col key={index} xs={4}>
            <Card>
              <Statistic
                prefix={item.icon}
                title={item.title}
                value={item.value}
                valueStyle={{ fontSize: '24px', marginTop: '8px' }}
              />
            </Card>
          </Col>
        ))}

        <Col xs={8}>
          <Card>
            <Row>
              <Col xs={12}>
                <Statistic
                  title='Net Profit'
                  value='$10,000'
                  valueStyle={{ fontSize: '24px', marginTop: '8px' }}
                />
              </Col>
              <Col xs={12}>
                <Progress
                  type='circle'
                  percent={70}
                  width={60}
                  strokeColor='#52c41a'
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div className='card-gap'></div>
      <Row gutter={16}>
        <Col xs={16}>
          <Card>
            <Column {...config} />
          </Card>
        </Col>
        <Col xs={8}>
          <Card title='Overview' style={{ width: '100%', height: '100%' }}>
            <div style={{ marginBottom: 16 }}>
              Goals <RightOutlined style={{ float: 'right' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              Popular Dishes <RightOutlined style={{ float: 'right' }} />
            </div>
            <div>
              Menus <RightOutlined style={{ float: 'right' }} />
            </div>
          </Card>
        </Col>
      </Row>

      <div className='card-gap'></div>
      <Row gutter={16}>
        <Col xs={16}>
          <Card style={{ width: '100%', height: '100%' }}>
            <Table dataSource={tableData} title={() => 'Recent Orders'}>
              <Column title='Customer' dataIndex='customer' key='customer' />
              <Column
                title='Order Number'
                dataIndex='orderNumber'
                key='orderNumber'
              />
              <Column title='Amount' dataIndex='amount' key='amount' />
              <Column
                title='Order Status'
                dataIndex='status'
                key='status'
                render={(status) => <OrderStatusTag status={status} />}
              />
            </Table>
          </Card>
        </Col>
        <Col xs={8}>
          <Card
            title='Customer Feedback'
            style={{ height: 400, overflowY: 'auto' }}
          >
            <List
              itemLayout='vertical'
              dataSource={feedbackData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.name}
                    description={<Rate disabled defaultValue={item.rating} />}
                  />
                  <div>{item.feedback}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
