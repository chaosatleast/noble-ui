import React,{useState} from 'react'
import { Layout, Menu, Dropdown, Space,Button} from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    FormOutlined,
    OrderedListOutlined,
    DownOutlined
} from '@ant-design/icons';

import { Outlet, Link } from "react-router-dom";
import './SideMenu.css';

function SideMenu() {
    
    const { Header, Sider, Content} = Layout;

    const [collapsed,setCollapsed] = useState(false);

    const profile =(
        <Menu>
            <Menu.Item key="/">

                <Link to="/"> Logout</Link>
           
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/dashboard']}>

                    <Menu.Item key="/dashboard" icon = {<DashboardOutlined/>}>
                        <Link to="/dashboard"> Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="/form-submission" icon = {<FormOutlined/>}>
                        <Link to="/form-submission"> Form Submission</Link>
                    </Menu.Item>

                    <Menu.Item key="/data-table" icon = {<OrderedListOutlined/>}>
                        <Link to="/data-table">Pagination </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}                    
                    <Dropdown overlay={profile}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}  style={{position:'absolute', right:10}}>
                        <Avatar size="large" icon={<UserOutlined />} />
                        </a>
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    minHeight: 280,
                    }}
                >
                    <Outlet/>
                </Content>
                </Layout>
        </Layout>
    )
}

export default SideMenu

