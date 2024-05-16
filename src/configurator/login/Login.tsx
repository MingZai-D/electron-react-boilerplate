import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./Login.scss"
import loginImg from '../../../assets/login.png'
import { MailOutlined} from '@ant-design/icons'
import { RouterKey } from "../../routers";
import { useReactive } from "ahooks";
import { accountInfo } from "../../store/driver_config";

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const Login = () =>{
  const navigate = useNavigate()
  const state= useReactive({
    accountInfo: accountInfo[0]
  })

  const checkAccountInfo = (value:any) =>{
    const account = accountInfo.find(account => account.email === value.email && account.password === value.password)
    if(account){
      navigate(RouterKey.select_driver)
    }
  }

  return (
    <div className="login-container">
      <div className="login-bg">
        <img src={loginImg} width={'100%'} />
      </div>
      <div className="login-content">
        <div className="login-content-bg">
          <div className="login-content-title">
            <div className="title">Login in</div>
            <div className="title-tip">Enter your account details to proceed</div>
          </div>
          <Form
            labelCol={{span: 24}}
            wrapperCol={{span: 24}}
            validateMessages={validateMessages}
            layout="vertical"
            className="login-form"
            onFinish={checkAccountInfo}
            onFinishFailed={() =>{
              console.log('failed')
            }}
            initialValues={state.accountInfo}
          >
            <Form.Item name={'email'} label="Enter your account email address" rules={[{ type: 'email', required: true }]}>
            <Input suffix={<MailOutlined />} className="form-input"/>
            </Form.Item>
            <Form.Item name={'password'} label="Enter your password" rules={[{ required: true }]}>
              <Input.Password className="form-input"/>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login