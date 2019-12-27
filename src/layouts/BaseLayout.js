import React from 'react'
import { Layout, Menu, Icon } from 'antd'

import './baselayout.scss'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="layout-total">
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Icon className="logo" type="github" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>欢迎你</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span onClick={this.handleLink.bind(this, './user-manage')}>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="3" onClick={this.handleLink.bind(this, './user-list')}>用户列表</Menu.Item>
              <Menu.Item key="4" onClick={this.handleLink.bind(this, './user-power')}>用户权限</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content></Content>
        </Layout>
      </Layout>
    )
  }

  handleLink (path) {
    this.props.history.push(path)
  }
}

export default SiderDemo
