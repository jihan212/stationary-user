import React, { useEffect, useState } from 'react';
import Navigation from '../Common/Navigation/Navigation';
import Products from '../Products/Products';

const Home = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch(`https://safe-plateau-29980.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container-fluid">
            <Navigation></Navigation>
            <div className="row pt-4">
            {
                products.map((product,i) => <Products key={i} product={product}></Products>)
            }
            </div>
        </div>
    );
};

export default Home;