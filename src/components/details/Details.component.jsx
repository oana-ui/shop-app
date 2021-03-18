import React, {useContext, useEffect, useState} from 'react'; 
import {StoreContext} from '../../state/StoreContext';

import './Details.style.scss'

const Details = props => {
    const context = useContext(StoreContext);
    const  { getProduct, addToCart } = context; 
    const {id} = props.match.params;

    let [product, setProduct] = useState({});
    const [selectedQty, setSelectedQty] = useState(1);

    useEffect(() => {
        (async () => {
            const prod = await getProduct(id);
            setProduct(prod)
        })()
    }, []);

    const isDisabled = product.stock < 1 || selectedQty < 1;

    const handleAddToCart = () => { 
        addToCart(product, selectedQty);
        props.history.push('/cart');
    }

    if(!product) {
        return <h2>Loading...</h2>
    }
    return(
        <div className="Details"> 
            <div className="img-section">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="content">
                <h2>{product.name}</h2>
                <div className="desc">{product.description}</div>
                <div className="price">{product.price}$</div>
                <div className='line'></div>
                <div className='stock'>STOCK: {product.stock}</div>
                <div>
                    <label htmlFor="number">Quantity </label>
                    <input type="number" value={selectedQty} onChange={(e) => setSelectedQty(e.target.value)} />
                </div>
                <button disabled={isDisabled} onClick={handleAddToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Details;