import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TbBrandOkRu } from "react-icons/tb";


export const getallproduct = createAsyncThunk("product/get-allproduct", async (payload, token) => {
    const responce = await axios.get("http://localhost:5500/product/get-all-product",
        payload,
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        });
    return responce.data
});


// export const getallproductusingId = createAsyncThunk("product/get-all-product-usingId", async () => {

//     const responce = await axios.get("http://localhost:5500/product/get-product/:id", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })

//     return responce.data
// })

// export const getallcatandsubcatagory = createAsyncThunk("product/getall-cat-sub-catgory", async () => {
//     const responce = await axios.get("http://localhost:5500/product/get-all-catagory-subcatagory", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })

//     return responce.data
// })


// export const getallcatagory = createAsyncThunk("product/get-all-catagory", async () => {
//     const responce = await axios.get("http://localhost:5500/product/get-all-catagory", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     return responce.data
// });

// export const getallsubcatagory = createAsyncThunk("product/get-all-sub-catogery", async () => {
//     const responce = await axios.get("http://localhost:5500/product/get-all-catagory", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     return responce.data
// })


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

    // extraReducers: (builder) => {
    //     builder.addCase(getallproductusingId.pending, (state, action) => {
    //         state.isLoading = true;
    //         state.isMessage = action.error.isMessage;
    //     })
    //     builder.addCase(getallproductusingId.fulfilled, (state, action) => {
    //         state.isLoading = true;
    //         state.productData = action.payload;
    //     })
    //     builder.addCase(getallproductusingId.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isMessage = " getting allproduct using id   is rejected";
    //     })
    // },
    // extraReducers: (builder) => {
    //     builder.addCase(getallcatandsubcatagory.pending, (state, action) => {
    //         state.isLoading = true;
    //         state.isMessage = action.error.isMessage;
    //     })
    //     builder.addCase(getallcatandsubcatagory.fulfilled, (state, action) => {
    //         state.isLoading = true;
    //         state.productData = action.payload;
    //     })
    //     builder.addCase(getallcatandsubcatagory.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isMessage = " getting all catogery and sub catgeroy  is rejected";
    //     })
    // },

    // extraReducers: (builder) => {
    //     builder.addCase(getallcatagory.pending, (state, action) => {
    //         state.isLoading = true;
    //         state.isMessage = action.error.isMessage;
    //     })
    //     builder.addCase(getallcatagory.fulfilled, (state, action) => {
    //         state.isLoading = true;
    //         state.productData = action.payload;
    //     })
    //     builder.addCase(getallcatagory.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isMessage = " getting all catogery is rejected";
    //     })
    // },
    // extraReducers: (builder) => {
    //     builder.addCase(getallsubcatagory.pending, (state, action) => {
    //         state.isLoading = true;
    //         state.isMessage = action.error.isMessage;
    //     })
    //     builder.addCase(getallsubcatagory.fulfilled, (state, action) => {
    //         state.isLoading = true;
    //         state.productData = action.payload;
    //     })
    //     builder.addCase(getallsubcatagory.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isMessage = " getting all sub catogery is rejected";
    //     })
    // }

})

export default productSlice.reducer