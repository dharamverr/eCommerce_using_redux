import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/***************************Async Thunk*************************************
 * createAsyncThunk in Redux Toolkit is used to handle asynchronous logic
 * (such as API calls, fetching data, submitting forms, etc.) while 
 * automatically managing the request lifecycle in Redux.

 * Without createAsyncThunk, you'd typically have to manually dispatch 
   separate actions like:

    FETCH_USERS_REQUEST
    FETCH_USERS_SUCCESS
    FETCH_USERS_FAILURE
 ***************************************************************************/

//Async Thunk
export const fetchProductsData = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    } catch (error) {
      throw error;
    }
  },
);
//console.dir(fetchProductsData)
const slice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {
    // productDataLoading(state) {
    //     state.isLoading = true
    //     state.isError = false
    // },
    // fetchProductDataError(state,action) {
    //     state.isLoading = false
    //     state.isError = state.action || 'Data not fetched.'
    // },
    // fetchProductData(state,action) {
    //     state.list = action.payload
    //     state.isLoading = false
    //     state.isError = false
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.isLoading = true;
      state.isError = '';
    }).addCase(fetchProductsData.fulfilled, (state,action) => {
        state.list = action.payload
        state.isLoading = false
        state.isError = ''
    }).addCase(fetchProductsData.rejected, (state) => {
        state.isLoading = false
        state.isError = state.action || 'Data not fetched.'
    });
  },
});
const { productDataLoading, fetchProductDataError } = slice.actions;

//selector function
export const getAllProductList = (state) => state.products;

// export const fetchProductsData = () => (dispatch) => {
//        dispatch(productDataLoading())
//         fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(data => dispatch(fetchProductData(data)))
//         .catch((error) => dispatch(fetchProductDataError()))
//     }

//console.log(slice)
export const { fetchProductData } = slice.actions;
export const productReducer = slice.reducer;
