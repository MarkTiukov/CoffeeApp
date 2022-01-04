import React from "react";
import { useSelector } from "react-redux";
import { selectActiveNumber, selectOrders } from "../../slices/orders_slice";
import OrderCard from "../order_card/order_card";

import './active_orders.css';

function ActiveOrders() {
    const orders = useSelector(selectOrders);
    let orders_cards = [];
    if (useSelector(selectActiveNumber) > 0) {
        for (const [key, value] of Object.entries(orders)) {
            orders_cards.push(<OrderCard order={value} />);
        }
    }
    return (
        <div className="active-orders-header">
            <h1>Active orders</h1>
            {orders_cards}
        </div>
    )
}

export default ActiveOrders;