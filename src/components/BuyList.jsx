import React from 'react'
import { Table, Divider } from 'antd';

function BuyList({CategoryName, dispatch, state, buyType, handleEdit}) {
    const columns = [
        {
          title: '항목명',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '금액',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Action',
          key: 'action',
          render: ({key}) => (
            <span>
              <a onClick={(e)=>handleEdit(buyType, key)}>수정</a>
              <Divider type="vertical" />
              <a onClick={(e)=>dispatch({type:'DELETE_BUY_LOG', buyType, key})}>삭제</a>
            </span>
          ),
        },
      ];
    

    return (
        <div>
            <Divider orientation="left">{CategoryName}</Divider>
            <Table columns={columns} dataSource={state} />
        </div>
    )
}

export default BuyList
