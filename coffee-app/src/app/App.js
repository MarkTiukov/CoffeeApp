import React from "react";
import { Menu, Layout } from "antd";
import CashierPage from "../pages/cashier_page";

const { Header, Content, Footer, Sider } = Layout;

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div className="App" >
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu
              mode="inline"
              theme="light"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1">
                Option 1
              </Menu.Item>
              <Menu.Item key="2">
                Option 2
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <CashierPage />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
