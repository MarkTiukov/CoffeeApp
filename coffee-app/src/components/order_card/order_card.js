import { Button, Card } from "antd";
import { BankOutlined, EllipsisOutlined } from '@ant-design/icons';
import React from "react";
import Meta from "antd/lib/card/Meta";

function OrderCard(props) {
    const { name, cost } = props.order;
    return (
        <Card
            hoverable={true}
            actions={[
                <Button shape="circle" icon={<BankOutlined />} />,
                <Button shape="circle" icon={< EllipsisOutlined />} />,
            ]}>
            <Meta
                title={name}
                description={cost + " рублей"}
            />
        </Card >
    )
}

export default OrderCard;