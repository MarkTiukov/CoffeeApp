import { Space } from "antd";
import React from "react";
import MenuItem from "../menu_item/menu_item";

import './menu_selector.css';

const global_menu = {
    "Coffee": [
        { name: "Espresso", price: 50 },
        { name: "Cappuccino", price: 100 },
        { name: "Latte", price: 100 },
        { name: "Raf", price: 120 },
    ],
    "Drinks": [
        { name: "Black tea", price: 50 },
        { name: "Green tea", price: 90 },
        { name: "Yellow tea", price: 150 },
    ],
}

export default class MenuSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menu: global_menu[props.menu_name] };
    }

    render() {
        const { menu } = this.state;
        return (
            <Space>
                {menu.map((value, index) => {
                    return (
                        <MenuItem item={value} />
                    )
                })}
            </Space>
        );
    }
}