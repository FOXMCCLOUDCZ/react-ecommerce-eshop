import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customerService from './customerService'

export const allUsers = createAsyncThunk('customer/all-customers', async (thunkAPI) => {
    try {
        return await customerService.allUsers()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    customers:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const customerSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(allUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default customerSlice.reducer