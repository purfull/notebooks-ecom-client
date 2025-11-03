import { configureStore } from "@reduxjs/toolkit";
import customerslice from "./slice/customerSlice"
import cartslice from "./slice/cartSlice"
import otpslice from "./slice/otpslice"
import productSlice from "./slice/productSlice"
const store = configureStore({
    reducer: {
        customer: customerslice,
        cart: cartslice,
        otp: otpslice,
        product: productSlice

    }
})

export default store