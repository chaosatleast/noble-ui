import React from 'react'
import {  Statistic,Card, Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

function Dashboard() {
  return (
    <div>
        <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
            <Row gutter={16}>
            <Col span={8}>
                <Card  bordered={false}>
                <Statistic
                    title="New Customer"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600', fontSize:15 }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                <br></br>
                <h3> 3,499 </h3>
                </Card>
            </Col>
            <Col span={8}>
                <Card  bordered={false}>
                <Statistic
                    title="New Order"
                    value={89.28}
                    precision={2}
                    valueStyle={{ color: 'red', fontSize:15 }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
                <br></br>
                <h3> 35,499 </h3>
                </Card>
            </Col>
            <Col span={8}>
            <Card  bordered={false}>
                <Statistic
                    title="Growth"
                    value={2.8}
                    precision={2}
                    valueStyle={{ color: '#3f8600', fontSize:15 }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                <br></br>
                <h3> 89.70% </h3>
                </Card>
            </Col>
            </Row>
        </div>
        <div className="site-card-border-less-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
        <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
            <Row gutter={16}>
            <Col span={16}>
                <Card  bordered={false}>
                <Statistic
                    title="New Customer"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600', fontSize:15 }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                <br></br>
                <h3> 3,499 </h3>
                </Card>
            </Col>
            <Col span={8}>
                <Card  bordered={false}>
                <Statistic
                    title="New Order"
                    value={89.28}
                    precision={2}
                    valueStyle={{ color: 'red', fontSize:15 }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
                <br></br>
                <h3> 35,499 </h3>
                </Card>
            </Col>
            </Row>
        </div>
    </div>
    
    )
}

export default Dashboard