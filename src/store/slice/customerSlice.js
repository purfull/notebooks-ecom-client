import { createSlice } from "@reduxjs/toolkit";
import { buildCreateSlice, createAsyncThunk,  } from "@reduxjs/toolkit";


export const createCustomers = createAsyncThunk(
    "register/create-register",
    async (formData) => {
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        return data;
    }
);

const custoemrSlice = createSlice({
    initialState: {
        isLoading: false,
        isMessage: null,
        customersData: [],
    },
    name: "customer",

    reducers:{
        add:()=>{

        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = " customers Registered Data successfully";
            state.customersData = action.payload;
        });
        builder.addCase(createCustomers.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "customers Registering Data is pending";
        });
        builder.addCase(createCustomers.rejected, (state, action) => {
            state.isLoading = false;
            state.isMessage = " customers Registering Data is failed";
        });
    },

})

export default custoemrSlice.reducer
