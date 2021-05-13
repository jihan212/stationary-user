import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({product}) => {
    return (
        <div className="col">
            <div class="card" style={{width: "18rem"}}>
                <img src={product.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p className="text-secondary">Price: {product.price}</p>
                        <button class="btn btn-outline-dark" >
                            <Link className="button" to="/order">Buy Now</Link>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Products;