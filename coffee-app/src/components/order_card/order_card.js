import { Button, Card } from "antd";
import { BankOutlined, EllipsisOutlined } from '@ant-design/icons';
import React from "react";
import Meta from "antd/lib/card/Meta";

function OrderCard(props) {
    const name = props.name;
    return (
        <Card
            hoverable={true}
            actions={[
                <Button shape="circle" icon={<BankOutlined />} />,
                <Button shape="circle" icon={< EllipsisOutlined />} />,
            ]}>
            <Meta
                title={name}
                description="xxx рублей"
            />
        </Card >
    )
}

export default OrderCard;