import { configureStore } from "@reduxjs/toolkit";
import customerslice from "./slice/customerSlice"

const store = configureStore({
    reducer: {
        customer: customerslice
    }
})

export default store