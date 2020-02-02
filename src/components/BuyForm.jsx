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

function BuyForm() {

    const { Option } = Select;
    
    return (
      <form  style={formStyle} className="FormContainer"> 

        <div style={inputsStyle}>
          <Select
            showSearch
            style={{ width: 100 }}
            placeholder="분류 선택"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="식비">식비</Option>
            <Option value="주거비">주거비</Option>
          </Select>
          <Input style={{ width: 300 }} placeholder="사용 내역" />
          <Input style={{ width: 150 }} prefix="₩" suffix="원" />
        </div>
        <Button type="primary" shape="round" htmlType="submit" size={10}>
          입력하기
        </Button>
      </form>
    )
}

export default BuyForm
