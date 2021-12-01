import { Space } from "antd";
import React from "react";
import MenuItem from "../menu_item/menu_item";

import './menu_selector.css';

const global_menu = {
    "Coffee": ["Espresso", "Cappuccino", "Latte"],
    "Drinks": ["Black tea", "Green tea"],
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
                        <MenuItem item_name={value} />
                    )
                })}
            </Space>
        );
    }
}