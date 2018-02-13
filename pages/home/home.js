import React from 'react'
import { Layout, Menu, Tabs, Form } from 'antd'
import LoginTab from '../components/LoginTab'
import RegisterTab from '../components/RegisterTab'

const { Header, Content } = Layout
const TabPane = Tabs.TabPane
class Home extends React.Component {
  handleClick = (item) => {
    const path = item.key
    location.href = path
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            onClick={this.handleClick}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/home">home</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Tabs defaultActiveKey="1" size="small">
              <TabPane tab="登录" key="1">
                <LoginTab />
              </TabPane>
              <TabPane tab="注册" key="2">
                <RegisterTab />
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    )
  }

}


export default Form.create()(Home)