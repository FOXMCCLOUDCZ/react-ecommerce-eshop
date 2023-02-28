import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogCategoryService from './blogCategoryService'

export const allBlogCategories = createAsyncThunk('blogCategory/all-blogs', async (thunkAPI) => {
    try {
        return await blogCategoryService.allBlogCategories()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    blogCategories:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const blogCategorySlice = createSlice({
    name: 'blogCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allBlogCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allBlogCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.blogCategories = action.payload
            })
            .addCase(allBlogCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default blogCategorySlice.reducer