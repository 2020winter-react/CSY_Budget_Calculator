import React, {useReducer} from 'react';

import './App.css';
import BuyList from './components/BuyList.jsx';
import BuyForm from './components/BuyForm';
import BudgetForm from './components/BudgetForm';

import { Layout, Menu, Breadcrumb, Form, Icon, Input, Button, Tooltip,  Select, Divider, Statistic} from 'antd';

const { Header, Content, Footer } = Layout;

const intialState = {};

function reducer(state, action) {
  switch (action.type) {
    case '':
      return {count: state.count + 1};



    default:
      throw new Error();
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer, intialState);


  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <div className="App">
        <BudgetForm />
        <Divider />
        <div className="budgetInputContainer">
          <BuyForm />
        </div>
        <Divider />
        <div className="budgeListViews">
          <div className="buyList">
            <BuyList CategoryName={"식비"} />
            <BuyList CategoryName={"주거비"} />
          </div>
        </div>
        <Divider orientation="center">최종 결과</Divider>
        <div className="budgerResultContainer" style={{textAlign:'center'}}>
          <Statistic title="목표 대비 남은 예산" value={213123} />
        </div>
      </div>  
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
   
  );
}

export default App;
