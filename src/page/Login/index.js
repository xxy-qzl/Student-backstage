import React from 'react'
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button
} from 'antd'

import './login.scss'

class Login extends React.PureComponent {
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <Row type="flex" align="middle" className="login-row">
          <Col span={8} offset={8}>
  
          <Form onSubmit={this.handleSubmit} className="login-from">
  
            <Form.Item>
            { getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            ) }
            </Form.Item>
  
            <Form.Item>
            { getFieldDecorator ( 'password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            } )(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            ) }
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              登 录
            </Button>
            </Form.Item>
  
          </Form>
  
          </Col>
        </Row>
      </div>
    )
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((errors, value) => {
    if(!errors){
      console.log(value)
    }
    } )
  }
}

export default Form.create()(Login)
