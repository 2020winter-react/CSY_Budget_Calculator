import React, {useReducer, useState, useEffect} from 'react';

import './App.css';
import BuyList from './components/BuyList.jsx';
import BuyForm from './components/BuyForm';
import BudgetForm from './components/BudgetForm';
import uuid from "uuid/v4";
import produce from "immer";

import { Layout, Menu, Breadcrumb, Divider, Statistic} from 'antd';

const { Header, Content, Footer } = Layout;
console.log(window.localStorage.getItem("budget"));
const intialState =  window.localStorage.getItem("budget") == null ? {
  budgetValue: 0,
  buyList: {
    0: [{key: uuid(), name: "Steak", amount: "49800"}, {key: uuid(), name: "Steak2", amount: "49800"}],
    1: [{key: uuid(), name: "Steak", amount: "49800"}, {key: uuid(), name: "Steak2", amount: "49800"}]
  }
} : JSON.parse(window.localStorage.getItem("budget"));

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_BUY_LOG':
      return produce(state, draft => {
        draft.buyList[action.buyType].push({key: uuid(), amount: action.amount, name: action.name})
      });
    case 'DELETE_BUY_LOG':
      return produce(state, draft => {
        draft.buyList[action.buyType].splice(draft.buyList[action.buyType].findIndex(info => info.key === action.key),1);
      })
    case 'UPDATE_BUY_LOG':
      return produce(state, draft => {
        draft.buyList[action.buyType][draft.buyList[action.buyType].findIndex(todo => todo.key === action.key)].name = action.name;
        draft.buyList[action.buyType][draft.buyList[action.buyType].findIndex(todo => todo.key === action.key)].amount = action.amount;
      })
    case 'CHANGE_BUDGET':
      return {...state, budgetValue: action.payload};
    default:
      throw new Error();
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, intialState);

  const [key, setKey] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [buyType, setBuyType] = useState(0);

  const [edit, setEdit] = useState(false);
  const [result, setResult] = useState(0);


  useEffect(() => {
    let buySum = parseInt(state.budgetValue);
    buySum -= state.buyList[0].map(b => parseInt(b.amount)).reduce((acc, b) => b+acc);
    buySum -= state.buyList[1].map(b => parseInt(b.amount)).reduce((acc, b) => b+acc);
    setResult(buySum);
    window.localStorage.setItem("budget", JSON.stringify(state));
  },[state])

   const handleSubmit = (e) => {
     e.preventDefault();

     if (!edit) { 
       dispatch({type:'ADD_BUY_LOG',
       buyType: buyType,
       amount: amount,
       name: name })
     } else {
      console.log("EDIT", key, amount, name); 
      dispatch({type:'UPDATE_BUY_LOG',
      buyType: buyType,
      key: key,
      amount: amount,
      name: name,
     })
     setEdit(false);
    }
     
     clearInputs(); 
     
   }

   const clearInputs = () => {
     setName('');
     setAmount(0);
     setBuyType(0);
   }

   const handleName = (e) => {
      setName(e.target.value)
   }
   const handleAmount= (e) => {
    setAmount(e.target.value)
   }
   const handleSelect = (e) => {
     console.log(e);
     setBuyType(e)
   }

   const handleEdit = (_buy, _key) => {
    setEdit(true);
     setKey(_key)
     const _edit = state.buyList[_buy][state.buyList[_buy].findIndex(log => log.key === _key)]
     setBuyType(_buy)
     setName(_edit.name)
     setAmount(_edit.amount)

   }


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
        <BudgetForm state={state.budgetValue} dispatch={dispatch}
        />
        <Divider />
        <div className="budgetInputContainer">
          <BuyForm 
            handleSubmit={handleSubmit}
            name={name}
            handleName={handleName}
            amount={amount} 
            handleAmount={handleAmount}
            handleSelect={handleSelect}
            buyType={buyType}
            edit
          />
        </div>
        <Divider />
        <div className="budgeListViews">
          <div className="buyList">
            <BuyList CategoryName={"식비"} state={state.buyList[0]} buyType={0}  dispatch={dispatch} handleEdit={handleEdit} />
            <BuyList CategoryName={"주거비"} state={state.buyList[1]} buyType={1}  dispatch={dispatch} handleEdit={handleEdit}/>
          </div>
        </div>
        <Divider orientation="center">최종 결과</Divider>
        <div className="budgerResultContainer" style={{textAlign:'center'}}>
          <Statistic title="목표 대비 남은 예산" value={result} />
        </div>
      </div>  
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
   
  );
}

export default App;
