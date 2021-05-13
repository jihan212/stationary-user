import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({product}) => {
    return (
        <div className="col">
            <div class="card" style={{width: "18rem"}}>
                <img src={product.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <button class="btn btn-outline-dark" >
                            <Link to="/order">Buy Now</Link>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Products;