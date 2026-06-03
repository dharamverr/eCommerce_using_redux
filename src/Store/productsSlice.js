import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  reducers: { },
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

//selector function
export const getAllProductList = (state) => state.products;

//console.log(slice)
export const { fetchProductData } = slice.actions;
export const productReducer = slice.reducer;
