import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productCategoryService from './productCategoryService'

export const allProductCategories = createAsyncThunk('productCategory/all-categories', async (thunkAPI) => {
    try {
        return await productCategoryService.allProductCategories()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    productCategories:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const productCategorySlice = createSlice({
    name: 'productCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allProductCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allProductCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.productCategories = action.payload
            })
            .addCase(allProductCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default productCategorySlice.reducer