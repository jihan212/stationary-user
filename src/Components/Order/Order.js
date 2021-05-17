import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Common/Navigation/Navigation';
import './Order.css';

const Order = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        fetch(`https://safe-plateau-29980.herokuapp.com/products/${id}`)
        .then (res => res.json())
        .then (data => setProduct(data))
        
      },[id]);

      const handleOrder = () => {
        const newOrder = { ...product};
        fetch('https://safe-plateau-29980.herokuapp.com/products/addOrder', {
          method : 'POST',
          headers : { 'content-type': 'application/json' },
          body : JSON.stringify(newOrder)
        })
        .then (res => res.json())
        .then (data => {
          console.log(data);
        })
      }


    return (
        <div className="container-fluid">
            <Navigation></Navigation>
            <div className="table-style">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {product.name}</td>
                        <td> {product.price}</td>
                    </tr>        
            </tbody>
            </table>
            <button onClick={handleOrder} class="btn btn-outline-dark">Order</button>
            </div>
        </div>
    );
};

export default Order;