import { Button, Popover } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/new_order_slice";

import './menu_item.css';

function MenuItem(props) {
    const dispatch = useDispatch();
    const { name, price } = props.item;
    const content = (
        <div>
            <b>Цена</b>: {price}
        </div>
    )
    return (
        <Popover content={content} title={name}>
            <Button type="primary" onClick={() => {
                dispatch(addItem(props.item));
            }}>
                {name}
            </Button>
        </Popover>
    )
}

export default MenuItem;