import { Button } from "antd";
import React from "react";

import './menu_item.css';

export default class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { item_name: props.item_name };
    }

    render() {
        return (
            <Button type="primary">
                {this.state.item_name}
            </Button>
        )
    }
}