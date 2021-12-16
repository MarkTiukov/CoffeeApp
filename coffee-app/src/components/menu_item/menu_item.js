import { Button, Popover } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/new_order_slice";

import './menu_item.css';

// export default class MenuItem extends React.Component {

//     constructor(props) {
//         super(props);
//         const { name, price } = props.item;
//         this.state = { item_name: name, item_price: price };
//     }

//     render() {

//     }
// }

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
                dispatch(addItem(name));
            }}>
                {name}
            </Button>
        </Popover>
    )
}

export default MenuItem;