import React from 'react';
import {Table,Tag} from'antd';
import {ProjectData} from './Project'

function ProjectTable() {
    const projectData = ProjectData
    const projectColumns =[
        {
            title: '#',
            dataIndex:'id',
            key:'id'
        },
        {
            title: 'Project Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
        },
        {
            title: 'Due Date',
            dataIndex: 'due_date',
            key: 'due_date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => (
                <>
                {
                    status.map(data=>{
                        let color='';
                        if(data === 'Released')
                        {
                            color = 'red';
                        }
                        else if (data === 'Review'){
                             color = 'green';
                        }
                        else if(data === 'Pending'){
                            color = 'cyan';
                        }
                        else if (data === 'Work In Progress'){
                            color = 'orange';
                        }
                        else if (data === 'Coming Soon'){
                             color = 'purple';
                        }
                        return(
                            <Tag color ={color} key={status}>
                                {status}
                            </Tag>
                        );
                    }
                    
                    )
                }
                </>
            )
        },
        {
            title:'Assign',
            dataIndex:'assign',
            key:'assign'
        }
    ];

    return (
        <Table columns={projectColumns} dataSource={projectData} pagination={false} />

    );
}

export default ProjectTable