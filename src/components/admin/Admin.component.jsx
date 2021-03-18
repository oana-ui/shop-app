import React, { useContext, useEffect } from 'react';
import {StoreContext} from '../../state/StoreContext';
import './Admin.style.scss';

const Admin = (props) => {
    const context = useContext(StoreContext);
    const { fetchProducts, products, removeProduct, initEditAction } = context;
    const { history } = props;

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRemove = (id) => {
        removeProduct(id);
    }   

    const handleAdd = () => {
        history.push('/admin/form');
    }

    const handleEdit = (id) => {
        initEditAction(id);
        history.push('/admin/form?isEditing');
    }

    return(
        <section className='Admin'>
            <div className='Admin-header'>
                <h2>Manage Products</h2>
                <button onClick={handleAdd} className="Admin-add-product">
                   + Add Product
                </button>
            </div>
            <table className='Admin-products'>
                <thead>
                    <tr className='row'>
                        <th>image</th>
                        <th className='name'>name</th>
                        <th>price</th>
                        <th>stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <tr className='row' key={product.id}>
                                <td className='img'>
                                    <img src={product.image} alt={product.name}/>
                                    
                                </td>
                                <td className='name' onClick={() => handleEdit(product.id)}>{product.name}</td>
                                <td className='price'>{product.price}$</td>
                                <td className='stock'>{product.stock}</td>
                                <td className='remove' onClick={() => handleRemove(product.id)}>Remove</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Admin;