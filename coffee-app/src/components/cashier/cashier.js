import React from "react";
import { Row, Col } from "antd";
import OrderCreator from "../order_creator/order_creator";

import "./cashier.css"
import ActiveOrders from "../active_orders";

export default class Cashier extends React.Component {

    render() {
        return (
            <Row>
                <Col flex={2}>
                    <OrderCreator />
                </Col>
                <Col flex={1}>
                    <ActiveOrders />
                </Col>
            </Row>
        )
    }
}