import React from "react";
import { Row, Col } from "antd";
import "./cashier.css"
import OrderCreator from "../order_creator/order_creator";


export default class Cashier extends React.Component {

    render() {
        return (
            <Row>
                <Col flex={2}>
                    <OrderCreator />
                </Col>
                <Col className='active-orders-header' flex={1}>
                    <h1>Active orders</h1>
                </Col>
            </Row>
        )
    }
}