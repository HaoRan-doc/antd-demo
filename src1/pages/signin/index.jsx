import React from 'react';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useState } from "react";
const App = () => {
  const [size, setSize] = useState("large");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}                                      
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="请输入账号"
        />
      </Form.Item>
      <Form.Item
        name="Username"
        rules={[
          {
            required: true,
            message: "请输入你的密码",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="请输入你的密码"
          placeholder="请输入你的密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Space size={size}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          <Button /* type="primary" htmlType="submit" className="login-form-button" */
          >
            注册
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;