import React from 'react';
import {List, Avatar,Typography} from 'antd';

function Inbox() {
    const {Text} = Typography;
    const data = [
        {
            key:'1',
            name: 'Leonardo Panye',
            message: "Hey! there I'm available ...",
            time: "12:30 PM",
            picture: "https://www.nobleui.com/html/template/assets/images/faces/face2.jpg"
        },
        {
            key:'2',
            name: 'Carl Henson',
            message: "I've finished it! See yo so...",
            time: "02:14 AM",
            picture: "https://www.nobleui.com/html/template/assets/images/faces/face3.jpg"
        },
        {
            key:'3',
            name: "Jenson Combs",
            message: "This template is awesome!",
            time: "08:22 PM",
            picture: "https://www.nobleui.com/html/template/assets/images/faces/face4.jpg"
        },
        {
            key:'4',
            name: "Animah Burton",
            message: "Nice to meet you",
            time: "05:49 AM",
            picture: "https://www.nobleui.com/html/template/assets/images/faces/face5.jpg"

        },
        {
            key:'5',
            name: "Yaretzi Mayo",
            message: "Hey! there I'm available...",
            time:"01:19 AM",
            picture:"https://www.nobleui.com/html/template/assets/images/faces/face6.jpg"
        },
        {
            key:'6',
            name: "Richard Chord",
            message: "Hey! there I'm available...",
            time:"01:05 AM",
            picture:"https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
        }
    ];
    return (

    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
        <List.Item >
            <List.Item.Meta
            avatar={<Avatar src={item.picture} />}
            title={<Text strong>{item.name} <Text type="secondary" style ={{position:'absolute',right:5}}>{item.time}</Text></Text>}
            description={item.message}
            />
        </List.Item>
    )}
  />
    )
}

export default Inbox