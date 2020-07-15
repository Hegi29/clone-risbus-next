import Head from 'next/head'
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.scss';

const layout = {
  wrapperCol: { span: 24 }
};
const tailLayout = {
  wrapperCol: { span: 24 }
};

export default function Home() {
  const login = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.bg}>
      <Head>
        <title>BINUS Research</title>
      </Head>
      <img className={styles.center} src="/assets/images/risbus-logo.png" alt="binus university logo" />
      <Card title="" bordered={true} className={styles.login}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ username: '', password: '' }}
          onFinish={login}
          onFinishFailed={onFinishFailed}
        >
          <h2 className={styles.titleSisfo}>SISFO Research</h2>
          <p className={styles.titleBinus}>Bina Nusantara University</p>
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: 5 }}>
                Sign In
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
      <div className={styles.footer}>
        <p><b>Copy Right 2019. Bina Nusantara University - Indonesia. All Right Reserved</b></p>
      </div>
    </div>
  )
}