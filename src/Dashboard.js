import React,{useState} from 'react'
import {  Statistic,Card, Col, Row,Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import LineGraph from './Charts/LineGraph';
import BarGraph from './Charts/BarGraph';
import DoughnutGraph from './Charts/DoughnutGraph';
import {YearRevenue} from './RevenueData';
import {SalesData} from './SalesMonth'

function Dashboard() {

    const [yearRevenue,setYearRevenue] = useState({
        labels: YearRevenue.map((data)=>data.year),
        datasets:[
            {
                label: "Total Revenue ($k)",
                data: YearRevenue.map((data)=>data.revenue),
                backgroundColor: ["#6571FF"]
            }
        ]
    })

    const [salesData,setSalesData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Nov","Dec"],
        datasets:[
            {
                label:"Number of Sales",
                data: SalesData.map((data)=>data.sales),
                backgroundColor: ["#6571FF"]
            }
        ]
    })

    const [usage,setUsage] = useState({
        labels : ["Storage left","Storage used"],
        datasets: [
            {
                label:"Storage",
                data:[1.5,3.5],
                backgroundColor: ["grey","#6571FF"]
            }
        ]
    })



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
                <Card title="Revenue" bordered={false} style={{ width: '100%'}}>
                    
                    <div class="chart-container">
                        <LineGraph chartData={yearRevenue} />
                    </div>
                </Card>
            </div>
            <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
                <Row gutter={16}>
                <Col span={16}>
                    <Card  title="Monthly Sales" bordered={false}>
                        <BarGraph chartData={salesData}/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Cloud Storage" bordered={false}>
                        <DoughnutGraph chartData={usage}/>
                        <Button>Upgrade</Button>
                    </Card>
                </Col>
                </Row>
            </div>
        </div>
        
        )
}

export default Dashboard