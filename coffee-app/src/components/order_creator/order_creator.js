import React from "react";
import { Tabs } from "antd";
import Icon from '@ant-design/icons';
import { CoffeeOutlined } from '@ant-design/icons';

import './order_creator.css';

const { TabPane } = Tabs;

export default class OrderCreator extends React.Component {
    // TODO: add custom icons

    render() {
        return (
            <Tabs defaultActiveKey="2">
                <TabPane
                    tab={
                        <span>
                            <CoffeeOutlined />
                            Coffee
                        </span>
                    }
                    key="1"
                >
                    Coffee section
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            Drinks
                        </span>
                    }
                    key="2"
                >
                    All drinks section
                </TabPane>
            </Tabs>
        );
    }

}