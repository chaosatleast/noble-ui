import React,{useState} from 'react';
import { ReactDOM } from 'react';
import { EmployeeData } from './Data';
import { Table, Tag, Space,Card } from 'antd';

function DataTable() {
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Office',
      dataIndex: 'office',
      key: 'office',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
  ];
  
  const data =EmployeeData;

  return (  
    <div className="site-card-border-less-wrapper" style={{background:'white',padding:'20px'}}>
            <Card  bordered={false} style={{ width: '100%' }}>
              <Table columns={columns} dataSource={data} />
            </Card>
      </div>
 
  );
}


export default DataTable;

