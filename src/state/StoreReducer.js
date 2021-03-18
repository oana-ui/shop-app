
import  {
    FETCH_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    INITIALIZE_EDIT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    MANIPULATE_QUANTITY_FROM_CART
} from './types';

export default (state, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        case REMOVE_PRODUCT:
            return {
                ...state, 
                products: state.products.filter(item => item.id !== action.payload)
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, {...action.payload}]
            }
        case INITIALIZE_EDIT:
            return {
                ...state,
                selectedValue: state.products.find(item => item.id === action.payload)
            }
        case EDIT_PRODUCT: 
            return {
                ...state, 
                selectedValue: '', 
                products: state.products.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case ADD_TO_CART: 
            if(!state.cart.length) return {...state, cart: [{...action.payload}]};
            const isInArray = state.cart.some(item => item.id === action.payload.id);
            if(isInArray) {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        return item.id === action.payload.id 
                        ? {
                            ...item, 
                            quantity: Number(item.quantity) + Number(action.payload.quantity), 
                            price: Number(item.price) + Number(action.payload.price),
                            stock: Number(item.stock) - Number(action.payload.quantity)
                        } 
                        : action.payload
                    })
                }
            } 
            return {
                ...state, 
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART: 
            return {
                ...state, 
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case MANIPULATE_QUANTITY_FROM_CART:
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if(Number(itemInCart.quantity) === 1) {
                return {
                    ...state, 
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                }
            }

            const newQuantity = Number(itemInCart.quantity) + Number(action.payload.amount);
            const newPrice = Number(itemInCart.fixedItemPrice) * newQuantity;
            const newStock = Number(itemInCart.stock) + (Number(action.payload.amount) * - 1)

            return {
                ...state,
                cart: state.cart.map(item => {
                   return item.id === action.payload.id 
                            ? { ...item, quantity: newQuantity, price: newPrice, stock: newStock } 
                            : item
                })
            }
        default: {
            return state
        }
    }
}