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
const {productDataLoading,fetchProductDataError} = slice.actions

//selector function
export const getAllProductList = (state) => state.products

export const fetchProductsData = () => (dispatch) => {
       dispatch(productDataLoading())
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch(fetchProductData(data)))
        .catch((error) => dispatch(fetchProductDataError()))
    }

//console.log(slice)
export const {fetchProductData} = slice.actions
export const productReducer = slice.reducer