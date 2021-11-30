import React from "react";
import "./cashier.css"

export default class Cashier extends React.Component {

    render() {
        return (
            <div className="cashier">
                <div className="cashier-menu">
                    <h1>menu</h1>
                </div>
                <div className="active-orders">
                    <p className="active-orders-header">Active orders</p>

                </div>
            </div>
        );
    }
}