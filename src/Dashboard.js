import React,{useState} from 'react'
import {  Statistic,Card, Col, Row,Button,Tabs, Typography} from 'antd';
import { 
    ArrowUpOutlined, 
    ArrowDownOutlined,
} from '@ant-design/icons';
import LineGraph from './Charts/LineGraph';
import MiniLineGraph from './Charts/MiniLineGraph';
import BarGraph from './Charts/BarGraph';
import MiniBarGraph from './Charts/MiniBarGraph';
import DoughnutGraph from './Charts/DoughnutGraph';
import ToggleMenu from './ToggleMenu';
import ProjectTable from './ProjectTable';
import Inbox from './Inbox';
import {YearRevenue,RevenueMonth} from './RevenueData';
import {SalesData} from './SalesMonth';
import{NewCustomer, Growth,Order} from './MiniGraphData';



function Dashboard() {

    const { TabPane } = Tabs;

    const {Text,Title} = Typography;

    const [newCustomer, setNewCustomer]=useState({
        labels: NewCustomer.map((data)=>data.day),
        datasets:[
            {
                data: NewCustomer.map((data)=>data.customer),
                backgroundColor: ["#6571FF"]
            }
        ]
    });

    const [order, setOrder]=useState({
        labels: Order.map((data)=>data.day),
        datasets:[
            {
                data: Order.map((data)=>data.order),
                backgroundColor: ["#6571FF"]
            }
        ]
    });

    const [growth, setGrowth]=useState({
        labels: Growth.map((data)=>data.day),
        datasets:[
            {
                data: Growth.map((data)=>data.growth),
                backgroundColor: ["#6571FF"]
            }
        ]
    });



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

    const [monthRevenue,setMonthRevenue] = useState({
        labels: ["Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21", "Jun 21", "Jul 21","Aug 21","Sep 21","Nov 21","Dec 21"],
        datasets:[
            {
                label:"Month Revenue ($k)",
                data: RevenueMonth.map((data)=>data.revenue),
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

    const [cloudStorage,setCloudStorage] = useState({
        labels : ["Storage left","Storage used"],
        datasets: [
            {
                label:"Storage",
                data:[3,5],
                backgroundColor: ["grey","#6571FF"],
                cutout:'80%'
            }
        ],
        
    })

    return (
        <div>
            <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
                <Row gutter={16}>
                <Col span={8}>
                    <Card  bordered={false}>
                    <Row>
                        <Text strong>New Customer <ToggleMenu/></Text>
                    </Row>
                    <Row>
                        <Col>
                            <Statistic
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600', fontSize:15 }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                            <br></br>
                            <Title level={2}>3,499</Title>
                        </Col>
                        <Col span={17}>
                            <div className='chart-mini-container'>
                                <MiniLineGraph chartData={newCustomer}/>
                            </div>
                        </Col>
                    </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={false}>
                    <Row>
                        <Text strong>New Order<ToggleMenu/></Text>
                    </Row>
                    <Row>
                        <Col>
                            <Statistic
                            value={2.28}
                            precision={2}
                            valueStyle={{ color: 'red', fontSize:15 }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                            />
                            <br></br>
                            <Title level={3}>34,990</Title>
                        </Col>
                        <Col span={16}>
                            <div className='chart-mini-container'>
                                <MiniBarGraph chartData={order}/>
                            </div>
                        </Col>
                    </Row>

                    </Card>
                </Col>
                <Col span={8}>
                <Card  bordered={false}>
                    <Row>
                        <Text strong>Growth <ToggleMenu/></Text>
                    </Row>
                    <Row>
                        <Col>
                            <Statistic
                                value={2.8}
                                precision={2}
                                valueStyle={{ color: '#3f8600', fontSize:15 }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                            <br></br>
                            <Title level={3}>89.87%</Title>
                        </Col>
                        <Col span={16}>
                            <div className='chart-mini-container'>
                                <MiniLineGraph chartData={growth}/>
                            </div>
                        </Col>
                    </Row>
                    </Card>
                </Col>
                </Row>
            </div>
            <div className="site-card-border-less-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
                <Card  bordered={false} style={{ width: '100%'}} >
                    <h4>Revenue <ToggleMenu/></h4>
                   
                    <Tabs defaultActiveKey="year">
                        <TabPane tab="Year" key="year">
                        <div className="chart-container">
                            <LineGraph chartData={yearRevenue}/>
                        </div>
                        </TabPane>
                        <TabPane tab="Month" key="month">
                        <div className="chart-container">
                            <LineGraph chartData={monthRevenue}/>
                        </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
            <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
                <Row gutter={16}>
                <Col span={16}>
                    <Card   bordered={false}>
                        <h5>Monthly Sales <ToggleMenu/></h5>
                        <BarGraph chartData={salesData}/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <h5>Cloud Storage <ToggleMenu/></h5>
                        <DoughnutGraph chartData={cloudStorage}/>
                        <Button style={{width:'100%'}}>Upgrade</Button>
                    </Card>
                </Col>
                </Row>
            </div>
            <div className="site-card-wrapper" style={{background:'#f0f2f5',padding:'20px'}}>
                <Row gutter={16}>
                <Col span={8}>
                    <Card   bordered={false}>
                        <h5>Inbox <ToggleMenu/></h5>
                        <Inbox/>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card bordered={false}>
                        <h5>Project <ToggleMenu/></h5>
                        <ProjectTable/>
                    </Card>
                </Col>
                </Row>
            </div>
        </div>
        
        )
}

export default Dashboard