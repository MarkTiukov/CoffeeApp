import React from "react";
import { Col, Row, Tabs } from "antd";
import { CoffeeOutlined } from '@ant-design/icons';

import './order_creator.css';
import MenuSelector from "../menu_selector/menu_selector";
import NewOrder from "../new_order";

const { TabPane } = Tabs;

const sections = ["Coffee", "Drinks"];
const section_icons = { "Coffee": <CoffeeOutlined /> } // TODO: add custom icons
// const section_entries = { "Coffee": "Coffee section", "Drinks": "All drinks sections" };


export default class OrderCreator extends React.Component {

    render() {
        return (
            <Tabs defaultActiveKey="1" type="card" centered>
                {sections.map((value, index) => {
                    return (
                        <TabPane tab={<span>{section_icons[value]} {value}</span>} key={index + 1}>
                            {/* {section_entries[value]} */}
                            <Row>
                                <Col flex="auto">
                                    <MenuSelector menu_name={value} />
                                </Col>
                                <Col flex="300px">
                                    <NewOrder />
                                </Col>
                            </Row>
                        </TabPane>
                    )
                })
                }
            </Tabs >
        );
    }

}