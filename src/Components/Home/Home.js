import React, { useEffect, useState } from 'react';
import Navigation from '../Common/Navigation/Navigation';
import Products from '../Products/Products';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch(`https://secure-brook-07656.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container">
            <Navigation></Navigation>
            <div className="row">
            {
                products.map((product,i) => <Products key={i} product={product}></Products>)
            }
            </div>
        </div>
    );
};

export default Home;