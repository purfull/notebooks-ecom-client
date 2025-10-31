import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const sendotp = createAsyncThunk("otp/send-otp", async ({ type, identifier }) => {

    const responce = await axios.post("http://localhost:5500/otp/send",
        { type, identifier },
        {
            headers: {
                "content-type": "application/json"
            }
        })

    return responce.data
})

export const verifyOtp = createAsyncThunk("otp/verifyOtp", async ({ otp, type, identifier }, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:5500/otp/verify", { otp, type, identifier });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
    }
}
);


const otpslice = createSlice({
    initialState: {
        isLoading: false,
        isMessage: null,
        success: false,
        otpData: [],
    },
    name: "otp",
    reducers: {
        add: () => {

        }
    },

    extraReducers: (builder) => {
        builder.addCase(sendotp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = " otp data send successfully";
            state.otpData = action.payload;
        })
        builder.addCase(sendotp.pending, (state, action) => {
            state.isLoading = true,
                state.isMessage = "otp sending is pending "
        })
        builder.addCase(sendotp.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = " otp sending is  rejected";

        });
    },

    extraReducers: (builder) => {
        builder.addCase(verifyOtp.pending, (state, action) => {
            state.isLoading = true,
                state.isMessage = "verify otp  is pending "
        })
        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "veridy otp data  successfully";
            // state.otpData = action.payload;
            state.success = action.payload.success;

        })
        builder.addCase(verifyOtp.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = " verifying otp is rejected";

        });
    },

})


export default otpslice.reducer