import React, {useContext, useEffect } from 'react';
import {StoreContext} from '../../state/StoreContext';
import {Link} from 'react-router-dom';

import './Home.style.scss';


const Home = () => {
    const context = useContext(StoreContext);
    const {fetchProducts, products} = context;
    useEffect(() => {
        if(!products.length) fetchProducts();
    }, [])
    return(
        <div className="Home">
            {products.map(product => {
                return <div className='product-card' key={product.id}>
                    <div className="img-container">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="content">
                        <h2>{product.name}</h2>
                        <div className="btns">
                            <h4>{product.price}$</h4>
                            <Link className='btn' to={`/products/${product.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Home;