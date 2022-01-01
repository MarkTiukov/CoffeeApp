import React from "react";
import { Card, Button, Badge, Space } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { addOrder, selectTotalNumber } from "../../slices/orders_slice";
import { clearItems, selectItems } from "../../slices/new_order_slice";

import './new_order.css';

function NewOrder() {
    const dispatch = useDispatch();
    const orders_number = useSelector(selectTotalNumber);
    const items = useSelector(selectItems);
    const order_name = "Order " + (orders_number + 1);
    const submit_button = <Button onClick={() => {
        const creating_order = {
            'order_name': order_name,
            'items': items,
        };
        dispatch(addOrder(order_name));
        dispatch(clearItems());
    }}>Submit</Button>;
    return (
        <div className="new-order">
            <Badge.Ribbon text="100€" color="purple">
                <Card title={order_name} extra={<Space size={10}>{submit_button} <div /></Space>}>
                    {items.map((value, index) => {
                        return (
                            <p>{value}</p>
                        )
                    })}
                </Card>
            </Badge.Ribbon >
        </div >
    )
}

export default NewOrder;