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
export const updatecustomers = createAsyncThunk("customer/update-customer", async (id, formData) => {
  const response = await axios.put("http://localhost:5500/customer/update-customer",
    formData,
    {
      headers: {
        "content-type": "application/json"
      }
    });
  return response.data
});

//login customers

export const logincustomer = createAsyncThunk("customer/login", async () => {
  const responce = await axios.post("", formdata, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return responce.data
})

const customerSlice = createSlice({
  initialState: {
    isLoading: false,
    isMessage: null,
    customersData: [],
    formData: {
      name: "",
      orderchoice: "",
      email: "",
      password: "",
      orgName: "",
      position: "",
      phone: "",
      state: "",
      city: "",
      country: "",
      address: "",
      zip_code: "",
      isB2B: false,

    }
  },
  name: "customer",

  reducers: {
    saveRegisterData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearRegisterData: (state) => {
      state.formData = {};
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
      state.isMessage = " updated customer Data state is rejected";

    });

  },
  extraReducers: (builder) => {

    builder.addCase(logincustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = "Data login successfully";
      state.customersData = action.payload
    });

    builder.addCase(logincustomer.pending, (state, action) => {
      state.isLoading = true;
      state.isMessage = "login data updated  is pending";

    });
    builder.addCase(logincustomer.rejected, (state, action) => {
      state.isLoading = true;
      state.isMessage = " logined customer Data  is rejected";

    });

  },



})

export default customerSlice.reducer
export const { saveRegisterData, clearRegisterData } = customerSlice.actions;
