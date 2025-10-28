import { createSlice } from "@reduxjs/toolkit";
import { buildCreateSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";

//created customers
export const createCustomers = createAsyncThunk("register/create-register", async (formData) => {
  const response = await axios.post("http://localhost:5500/customer/create-customer",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
);

//updated customers
export const updatecustomers = createAsyncThunk("customer/update-customer", async (id,formData) => {
  const response = await axios.put("http://localhost:5500/customer/update-customer",
    formData,
    {
    headers: {
      "content-type": "application/json"
    }
  });
  return response.data
});



const custoemrSlice = createSlice({
  initialState: {
    isLoading: false,
    isMessage: null,
    customersData: [],
  },
  name: "customer",
  reducers: {
    add: () => {

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

  extraReducers: (builder) => {

    builder.addCase(updatecustomers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = "customers updated Data successfully";
      state.customersData = action.payload
    });

    builder.addCase(updatecustomers.pending, (state, action) => {
      state.isLoading = true;
      state.isMessage = "customers updated Data is pending";

    });
    builder.addCase(updatecustomers.rejected, (state, action) => {
      state.isLoading = true;
      state.isMessage = " updated customer Data state is pending";

    });

  }


})

export default custoemrSlice.reducer
