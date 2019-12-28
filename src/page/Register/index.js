import React from 'react'
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Radio
} from 'antd'

import './register.scss'

class Register extends React.PureComponent {
  state={
    gender: 1
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register-box">
        <Row type="flex" align="middle" className="register-row">
          <Col span={8} offset={8}>
  
          <Form onSubmit={this.handleSubmit} className="register-from">
  
            <Form.Item>
            { getFieldDecorator('username', {
              rules: [
                { required: true, message: '用户名不能为空' },
                {type: "string", pattern: /^[\u4e00-\u9fa5]+$/, message: '用户名只能是中文'}
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            ) }
            </Form.Item>
  
            <Form.Item>
            { getFieldDecorator ( 'password', {
              rules: [
                { required: true, message: '密码不能为空' },
                { type: "string", pattern: /^[a-zA-Z0-9]+$/, message: '密码只能是英文或者数字' },
                { min: 6, message: '密码长度最少为6位，最长为12位' },
                { max: 6, message: '密码长度最少为6位，最长为12位' }
              ],
            } )(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            ) }
            </Form.Item>
  
            <Form.Item>
              { getFieldDecorator ('gender', {
                rules: [{ required: true, message: 'Please input your gender!' }],
                initialValue: this.state.gender
              } )(
                <Radio.Group>
                  <Radio value={1} >男</Radio>
                  <Radio value={2} >女</Radio>
                </Radio.Group>
              ) }
            </Form.Item>
  
            <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button" block>
              注 册
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

export default Form.create()(Register)
