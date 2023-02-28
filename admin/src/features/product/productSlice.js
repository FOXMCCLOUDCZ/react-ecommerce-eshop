import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

export const allProducts = createAsyncThunk('product/get-products', async (thunkAPI) => {
    try {
        return await productService.allProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    products:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(allProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default productSlice.reducer