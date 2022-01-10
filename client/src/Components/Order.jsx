import React, { Component } from 'react'
import './order.css'
export default class Order extends Component {
    render() {
        return (
            <div>
            <div className="details">
            <div className="five">
            <img src="https://cdn.pixabay.com/photo/2021/09/11/10/27/medal-6615190__340.png" alt="" className="orderimg" />
            </div>
            <div className="six">
                <h2>Order 1</h2>
                <p> Order Details</p>
                <p> order date: 17th January 2022</p>
                <p>Delivery Date: 22nd January 2022</p>
                <p>From : Nairobi</p>
                <p>Destination:Nyeri</p>
                <p>Status : <span style={{ color:'green'}}> on Transit</span></p>
            </div>
            </div>
            </div>
        )
    }
}
