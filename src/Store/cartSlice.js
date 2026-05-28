//action type
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";
const CART_INCREASE_QUANTITY_BY = "cart/increaseQuantityBy";
const CART_DECREASE_QUANTITY_BY = "cart/decreaseQuantityBy";


//action creator
export function cartAddItem(productData) {
    return {type: CART_ADD_ITEM,payload: productData}
}
export function cartRemoveItem(productId) {
    return {type: CART_REMOVE_ITEM,payload: {productId}}
}
export function cartIncreaseQuantity(productId) {
    return {type: CART_INCREASE_QUANTITY,payload: {productId}}
}
export function cartDecreaseQuantity(productId) {
    return {type: CART_DECREASE_QUANTITY,payload: {productId}}
}
export function cartIncreaseQuantityBy(productId,count) {
    return {type: CART_INCREASE_QUANTITY_BY,payload: {productId,count}}
}
export function cartDecreaseQuantityBy(productId,count) {
    return {type: CART_DECREASE_QUANTITY_BY,payload: {productId,count}}
}

//reducer
export function cartReducer(state=[],action) {
    switch(action.type) {
        case CART_ADD_ITEM : {
            const findIndex = state.findIndex((cartItem) => cartItem.productId === action.payload.productId)
            
            if(findIndex !== -1) {
                return state.map((cartItem) => {
                    if(cartItem.productId === action.payload.productId) {
                        return {...cartItem, quantity: cartItem.quantity +1}
                    }else {
                        return cartItem
                    }
                })
            }else {

                return [...state,{...action.payload, quantity:1}]
            }
        }
        case CART_REMOVE_ITEM :
        return state.filter((cartItem) => cartItem.productId !== action.payload.productId)
        case CART_INCREASE_QUANTITY :
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return {...cartItem,quantity: cartItem.quantity +1}
                }else {
                    return cartItem
                }
            })
        case CART_DECREASE_QUANTITY:
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return {...cartItem,quantity: cartItem.quantity - 1}
                }else {
                    return cartItem
                }
            }).filter((cartItem) => cartItem.quantity > 0)
        case CART_INCREASE_QUANTITY_BY:
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return {...cartItem,quantity: cartItem.quantity + action.payload.count}
                }else {
                    return cartItem
                }
            })
        case CART_DECREASE_QUANTITY_BY:
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return {...cartItem,quantity: cartItem.quantity - action.payload.count}
                }else {
                    return cartItem
                }
            }).filter((cartItem) => cartItem.quantity > 0)
        default : return state
    }
}