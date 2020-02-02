import React from 'react'
import { Layout, Menu, Breadcrumb, Form, Icon, Input, Button, Tooltip,  Select} from 'antd';



const formStyle = {
  display: 'flex',
}

const inputsStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',

}

function BuyForm({ handleSubmit,
  name,
  handleName,
  amount,
  handleAmount,
  handleSelect,
  buyType,
}) {

    const { Option } = Select;
    return (
      <form  onSubmit={handleSubmit} style={formStyle} className="FormContainer"> 
        <div style={inputsStyle}>
          <Select
            showSearch
            style={{ width: 100 }}
            placeholder="분류 선택"
            optionFilterProp="children"
            name="buyType"
            value={buyType}
            onChange={handleSelect}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value={0}>식비</Option>
            <Option value={1}>주거비</Option>
          </Select>
          <Input 
            name="name" 
            style={{ width: 300 }} 
            placeholder="사용 내역" 
            value={name}
            onChange={handleName}
          />
          <Input 
            name="amount" 
            style={{ width: 150, textAlign:'right' }}
            prefix="₩" suffix="원" 
            value={amount}
            onChange={handleAmount}            
          />
        </div>
        <Button type="primary" shape="round" htmlType="submit">
          입력하기
        </Button>
      </form>
    )
}

export default BuyForm
