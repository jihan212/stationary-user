import React from 'react';

const Products = ({product}) => {
    return (
        <div className="col">
            <div class="card" style={{width: "18rem"}}>
                <img src={product.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
};

export default Products;