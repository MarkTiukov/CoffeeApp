import { Space } from "antd";
import React from "react";
import { get_menu_items_in_category } from "../../actions/menu_actions";
import MenuItem from "../menu_item/menu_item";

import './menu_selector.css';

export default class MenuSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category: props.menu_name, menu: [] };
    }

    download_items = () => {
        console.log("category", this.state.category);
        get_menu_items_in_category(this.state.category)
            .then(data => this.setState({ menu: data }));
    }

    componentDidMount() {
        this.download_items();
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