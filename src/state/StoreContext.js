import React, {createContext, useReducer} from 'react';
import StoreReducer from './StoreReducer';
import axios from 'axios';

import fromObjToArray from '../helpers/fromObjToArray';

import  {
    FETCH_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    INITIALIZE_EDIT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    MANIPULATE_QUANTITY_FROM_CART
} from './types'

const BASE_URL = 'https://final-project-850b4-default-rtdb.firebaseio.com/';

export const StoreContext = createContext();

const initialState = {
    products: [],
    selectedValue: '',
    cart: []
}

export const StoreContextProvider = props => {

    const [state, dispatch] = useReducer(StoreReducer, initialState);

    const { products, selectedValue, cart } = state

    const fetchProducts = async () => {
        const url = `${BASE_URL}.json`;
        try {
            const response = await axios.get(url);
            const arrayOfProducts = fromObjToArray(response.data);
            dispatch({
                type: FETCH_PRODUCTS,
                payload: arrayOfProducts
            });
        } catch (error) {
            console.log(error);
        }
    }

    const removeProduct = async id => {
        const url = `${BASE_URL}${id}/.json`;
        try {
            await axios.delete(url);
            dispatch({
                type: REMOVE_PRODUCT,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addProduct = async product => { 
        const url = `${BASE_URL}.json`;
        const response = await axios.post(url, product);
        const newProd = { 
            ...product, 
            id: response.data.name
        }
        dispatch({
            type: ADD_PRODUCT,
            payload: newProd
        })
    }

    const initEditAction = id => {
        dispatch({
            type: INITIALIZE_EDIT,
            payload: id
        })
    }

    const editProduct = async (newProduct, id) => { 
        const url = `${BASE_URL}${id}/.json`;
        const response = await axios.patch(url, newProduct);
        dispatch({
            type: EDIT_PRODUCT, 
            payload: {...response.data, id}
        })
    }

    const getProduct = async id => {
        let product; 
        if(!products.length) {
            const url = `${BASE_URL}.json`;
            const response = await axios.get(url);
            const arrayOfProducts = fromObjToArray(response.data);
            product = arrayOfProducts.find(p => p.id === id); 
        } else {
            product = products.find(p => p.id === id);
        }
        return product;
    }

    const addToCart = (product, quantity) => {
        const newProduct = {
            ...product, 
            stock: Number(product.stock) - Number(quantity)
        };

        editProduct(newProduct, product.id);

        dispatch({
            type: ADD_TO_CART,
            payload: {
                id: newProduct.id,
                name: newProduct.name,
                description: newProduct.description,
                fixedItemPrice: newProduct.price,
                stock: newProduct.stock,
                quantity,
                price: Number(newProduct.price) * Number(quantity)
            }
        });
    }

    const removeFromCart = id => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }

    const manipulateQuantityFromCart = (val, id, stock) => {
        console.log(stock);
        editProduct({stock: Number(stock) + Number(val) }, id);
        dispatch({
            type: MANIPULATE_QUANTITY_FROM_CART, 
            payload: {amount: val, id}
        })
    }
    

    return(
        <StoreContext.Provider value={{
            fetchProducts, 
            products, 
            selectedValue, 
            cart, 
            removeProduct, 
            addProduct, 
            initEditAction, editProduct, getProduct, addToCart, removeFromCart, manipulateQuantityFromCart}}>
            {props.children}
        </StoreContext.Provider>
    )
}