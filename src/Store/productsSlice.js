//action creator

import { createSlice } from "@reduxjs/toolkit";
//import { productList } from "../../productList";



//reducer function
// export function productReducer(state = productList, action) {
//     return state
// }

const slice = createSlice({
    name:'products',
    initialState: {
        isLoading: false,
        list: [],
        isError: ''
    },
    reducers: {
        productDataLoading(state) {
            state.isLoading = true
            state.isError = false
        },
        fetchProductDataError(state,action) {
            state.isLoading = false
            state.isError = state.action || 'Data not fetched.'
        },
        fetchProductData(state,action) {
            state.list = action.payload
            state.isLoading = false
            state.isError = false
        }
    }

})

//selector function
export const getAllProductList = (state) => state.products

//console.log(slice)
export const {productDataLoading,fetchProductDataError,fetchProductData} = slice.actions
export const productReducer = slice.reducer