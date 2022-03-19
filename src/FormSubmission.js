import React, { useState } from 'react';
import {
  Layout,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Button,
  AutoComplete,
  Card,
} from 'antd';



function FormSubmission() {

  const officeData =[
    {
      value: 'Wilayah Persekutuang',
      label: 'Wilayah Persekutuan',
      children: [
        {
          value: 'Kuala Lumpur',
          label: 'Kuala Lumpur',
        },
        {
          value:'Labuan',
          label:'Labuan'
        },
        {
          value:'Putrajaya',
          label:'Putrajaya'
        }
      ]
    }
  ];
  return (
    
    <div className="site-card-border-less-wrapper" style={{background:'white',padding:'20px'}}>
      <Card  bordered={false}>
        <div className="form-example">
        <Form  wrapperCol={{span:14}}>

        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input  placeholder='e.g: Ryan Swift'/>
        </Form.Item>

        <Form.Item label="Position" name="position"

          rules={[
            {
              required:true,
              message:'Please select a postion'
            }
          ]} 
        >
        <Select>
            <Select.Option value="software engineer">Software Engineer</Select.Option>
            <Select.Option value="marketing manager">Marketing Manager</Select.Option>
            <Select.Option value="hr staff">HR Staff</Select.Option>
            <Select.Option value="technical staff">Technical staff</Select.Option>
            <Select.Option value="system analyst">System Analyst</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="office"
          label="Office"
          rules={[
            { type: 'array', required: true, message: 'Please select your office location!' },
          ]}
        >
          <Cascader options={officeData} />
        </Form.Item>

        <Form.Item 
          label="Start date" 
          name="date"
          rules={[{required:true, message:'Please select start date of working'}]}>
          <DatePicker />
        </Form.Item>
          <Form.Item name= "age" label="Age" rules={[{ required:true,type: 'number', min: 18, max: 65 }]}>
                <InputNumber />
            </Form.Item>
          <Form.Item  name= "salary" label="Salary" rules={[{ required:true,type: 'number', min: 1500, max: 20000 }]}>
                <InputNumber />
            </Form.Item>
          <Form.Item> 
            <Button block type="primary" htmlType="submit">Submit
            </Button>
          </Form.Item>

        </Form> 

        </div>
        
      </Card>
    </div>


      


  )
}

export default FormSubmission