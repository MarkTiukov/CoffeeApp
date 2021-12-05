import { Button, Popover } from "antd";
import React from "react";

import './menu_item.css';

export default class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        const { name, price } = props.item;
        this.state = { item_name: name, item_price: price };
    }

    render() {
        const content = (
            <div>
                <b>Цена</b>: {this.state.item_price}
            </div>
        )
        return (
            <Popover content={content} title={this.state.item_name}>
                <Button type="primary">
                    {this.state.item_name}
                </Button>
            </Popover>
        )
    }
}