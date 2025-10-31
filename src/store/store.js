import { configureStore } from "@reduxjs/toolkit";
import customerslice from "./slice/customerSlice"
import cartslice from "./slice/cartSlice"
import otpslice from "./slice/otpslice"
const store = configureStore({
    reducer: {
        customer: customerslice,
        cart: cartslice,
        otp:otpslice
        
    }
})

export default store