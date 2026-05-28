//ACTION TYPE
const WISHLIST_ADD_ITEM = "wishlist/addItems";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItems";

//action creator
export function wishListAddItem(productData) {
    return {type: WISHLIST_ADD_ITEM,payload:productData}
}

export function wishListRemoveItem(productId) {
    return {type:WISHLIST_REMOVE_ITEM,payload:{productId}}
}

//reducer
export function wishListReducer(state=[],action) {
    switch(action.type) {
        case WISHLIST_ADD_ITEM:
            return [...state, action.payload]
        case WISHLIST_REMOVE_ITEM:
            return state.filter((wishlistItem) => wishlistItem.productId !== action.payload.productId)
        default: return state
    }
}