import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

export const allBlogs = createAsyncThunk('blog/all-blogs', async (thunkAPI) => {
    try {
        return await blogService.allBlogs()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    blogs:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allBlogs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.blogs = action.payload
            })
            .addCase(allBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default blogSlice.reducer