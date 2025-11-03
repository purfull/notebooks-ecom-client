import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getallproduct = createAsyncThunk("product/get-allproduct", async (payload) => {
    const responce = await axios.get("http://localhost:5500/product/get-all-product",
        payload,
        {
            headers: {
                "Content-Type": "application/json"
            }
        });
    return responce.data
});



const productSlice = createSlice({

    initialState: {
        isLoading: false,
        isMessage: null,
        productData: [],
    },
    name: "product",
    reducers: {
        add: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getallproduct.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = action.error.isMessage;
        })
        builder.addCase(getallproduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = " getting all data fetched successfully";
            state.productData = action.payload;

        })
        builder.addCase(getallproduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isMessage = " getting all data is rejected";
        })
    },

})

export default productSlice.reducer