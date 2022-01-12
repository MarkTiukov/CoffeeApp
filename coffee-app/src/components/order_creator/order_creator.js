import React from "react";
import { Col, Row, Tabs } from "antd";
import { CoffeeOutlined } from '@ant-design/icons';

import './order_creator.css';

import MenuSelector from "../menu_selector/menu_selector";
import NewOrder from "../new_order";
import { get_all_categories } from "../../actions/menu_actions";

const { TabPane } = Tabs;

const section_icons = { "Coffee": <CoffeeOutlined /> } // TODO: add custom icons

export default class OrderCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sections: [] }
    }

    download_categories = () => {
        get_all_categories()
            .then(data => data.map(entry => entry['name']))
            .then(categories => {
                this.setState({ sections: categories });
                console.log('downloaded categories');
            });
    };

    componentDidMount() {
        this.download_categories();
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" type="card" centered>
                {this.state['sections'].map((value, index) => {
                    return (
                        <TabPane tab={<span>{section_icons[value]} {value}</span>} key={index + 1}>
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