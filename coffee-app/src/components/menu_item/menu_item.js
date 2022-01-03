import { Button, Popover } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/new_order_slice";
import { take_item } from "../../actions/menu_actions";

import './menu_item.css';

function MenuItem(props) {
    const dispatch = useDispatch();
    const item = props.item;
    const content = (
        <div>
            <b>Цена</b>: {item.price}
        </div>
    )
    return (
        <Popover content={content} title={item.name}>
            <Button type="primary" onClick={() => {
                if (item.amount !== null) {
                    take_item(item);
                }
                dispatch(addItem(item));
            }}>
                {item.name}
            </Button>
        </Popover>
    )
}

export default MenuItem;