import React from "react";
import { Card, Button } from "antd";
import { useSelector } from 'react-redux';

import './new_order.css';

function NewOrder() {
    const items = useSelector((state) => state.new_order.items);
    return (
        <Card title="New order" extra={<Button>Submit</Button>}>
            {items.map((value, index) => {
                return (
                    <p>{value}</p>
                )
            })}
        </Card>
    )
}

export default NewOrder;