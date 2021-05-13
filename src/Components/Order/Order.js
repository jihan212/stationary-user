import React from 'react';
import Navigation from '../Common/Navigation/Navigation';
import './Order.css';

const Order = () => {
    return (
        <div className="container">
            <Navigation></Navigation>
            <div className="table-style">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product Name</td>
                        <td>Product Price</td>
                    </tr>        
            </tbody>
            </table>
            <button class="btn btn-outline-dark">Order</button>
            </div>
        </div>
    );
};

export default Order;