import React from 'react'
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd'

import { LoginIn } from '@/api/UserApi'

import { connect } from 'react-redux'

import './login.scss'

class Login extends React.PureComponent {
  state = {
    loading: false
  }
  render () {
    const { loading } = this.state
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
            <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form-button" 
            block
            loading={ loading }
            >
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
      // console.log(value)
      this.setState({
        loading: true
      })
      LoginIn( value ).then( response => {
        const { data } = response
        if( data.code === 0 ){

          this.props.handleLogin(data.data)

          message.success('登录成功', 1.5, () => {
            let redirect = this.props.state ? this.props.location.state.redirect : '/'
            this.props.history.replace(redirect)
          })
        }else{
          this.setState({
            loading: false
          })
          message.error(data.msg)
        }
      })
    }
    } )
  }
}

export default connect(
  // 有两个参数，第一个是数据，第二个是动作
  null,
  ( dispatch ) => {
    return {
      handleLogin ( user ) {
        dispatch ({
          type: 'LOGIN',
          user
        })
      }
    }
  }
)(Form.create()(Login))
