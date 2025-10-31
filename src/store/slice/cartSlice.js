import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addedtocart = createAsyncThunk("cart/add-to-cart", async () => {

    const response = await axios.post("",
        payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
    return response.data

})

//remainder paylaod will chnaging 

const cartslice = createSlice({
  initialState: {
    isLoading: false,
    isMessage: null,
    cartData: [],
  },    name: "cart",
    reducers: {
        add: () => {

        }
    },

    extraReducers: (builder) => {
        builder.addCase(addedtocart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "added to cart  Data successfully";
            state.customersData = action.payload
        });
        builder.addCase(addedtocart.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "added to cart  Data is pending";
        })

        builder.addCase(addedtocart.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "added to cart is now pending stage"

        })
    }
})


export default cartslice.reducer