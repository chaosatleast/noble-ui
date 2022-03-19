import React from 'react'
import{
    MoreOutlined,
    PrinterOutlined,
    DownloadOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeOutlined
}from '@ant-design/icons';

import{Dropdown, Menu} from 'antd';

function ToggleMenu() {
    
    const menu =(
        <Menu>
            <Menu.Item>
                <p>
                    <EyeOutlined/> View
                </p>
            </Menu.Item>
            <Menu.Item>
                <p>
                    <EditOutlined/> Edit
                </p>
            </Menu.Item>
            <Menu.Item>
                <p>
                    <DeleteOutlined/> Delete
                </p>
            </Menu.Item>
            <Menu.Item>
                <p>
                    <PrinterOutlined/> Print
                </p>
            </Menu.Item>
            <Menu.Item>
                <p>
                    <DownloadOutlined/> Download
                </p>
            </Menu.Item>
            
        </Menu> 
    );
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}  style={{position:'absolute', top:10, right:20}}>
                <MoreOutlined/>
            </a>
        </Dropdown>
    )
}

export default ToggleMenu