import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import enquiryService from './enquiryService'

export const allEnquiries = createAsyncThunk('enquiry/all-enquiries', async (thunkAPI) => {
    try {
        return await enquiryService.allEnquiries()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    enquiries:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

export const enquirySlice = createSlice({
    name: 'enquiries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allEnquiries.pending, (state) => {
                state.isLoading = true
            })
            .addCase(allEnquiries.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.enquiries = action.payload
            })
            .addCase(allEnquiries.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
        }
})

export default enquirySlice.reducer