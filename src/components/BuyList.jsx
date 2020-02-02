import React from 'react'
import { Table, Divider } from 'antd';


const columns = [
    {
      title: '항목명',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '금액',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>수정</a>
          <Divider type="vertical" />
          <a>삭제</a>
        </span>
      ),
    },
  ];

const data = [
    {
      key: '1',
      name: 'John Brown',
      price: 32000
    },
    {
        key: '2',
        name: 'John Brown',
        price: 532000
      },
      {
        key: '3',
        name: 'John Broaasdadn',
        price: 342000
      },
  ];

function BuyList({CategoryName}) {
    return (
        <div>
            <Divider orientation="left">{CategoryName}</Divider>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default BuyList
