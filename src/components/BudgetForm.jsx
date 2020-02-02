import React from 'react'
import { Layout, Menu, Breadcrumb, Form, Icon, Input, Button, Tooltip,  Select} from 'antd';

const formStyle = {
    display: 'flex',
  }
  
  const inputsStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  
  }

function BudgetForm() {
    return (
        <form  style={formStyle} className="FormContainer"> 

        <div style={inputsStyle}>
          
          <h3>목표 예산: </h3>
          <Input style={{ width: 350, marginLeft: 20 }} prefix="₩" suffix="원" />
        </div>
      </form>
    )
}

export default BudgetForm
