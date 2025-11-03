import create from "@ant-design/icons/lib/components/IconFont";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get all cart items
export const getallCartitems = createAsyncThunk("cart/getall-cart", async () => {
    const response = await axios.get("http://localhost:5500/customer/cart/get-all-cart-items", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data

})

//get all cart id 

export const getCartusingid = createAsyncThunk("cart/get-using-id", async () => {
    const response = await axios.get("http://localhost:5500/customer/cart/get-cart/:id", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data
})

//added acrt 
export const addedtoCart = createAsyncThunk("cart/add-to-cart", async ({ productId, quantity,token }) => {

    const response = await axios.post("http://localhost:5500/customer/cart/add-cart-item",
        { productId, quantity },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            },
        })
    return response.data

})

//clear cart 
export const clearCart = createAsyncThunk("cart/clear-cart", async () => {
    const response = await axios.post("http://localhost:5500/cart/clear-cart/:id",
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
    return response.data

})
//update cart
export const updateCart = createAsyncThunk("cart/update-cart", async () => {
    const response = await axios.post("http://localhost:5500/cart/update-cart-item/:id",
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
    return response.data
})

//dlete cart
export const deleteCart = createAsyncThunk("cart/delete-cart", async () => {
    const response = await axios.post("http://localhost:5500/cart/delete-cart-item/:id",
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
    }, name: "cart",
    reducers: {
        add: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getallCartitems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "getallcart fetched successfully";
            state.cartData = action.payload
        });
        builder.addCase(getallCartitems.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "getallcart fetched is now pending";
        })

        builder.addCase(getallCartitems.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "getallcart  is now pending state"

        })
    },

    extraReducers: (builder) => {

        builder.addCase(getallCartitems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "getallcart id fetched is now pending";
            state.cartData = action.payload
        })
        builder.addCase(getCartusingid.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "getallcart id fetched is now pending";
        });
        builder.addCase(getallCartitems.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "getallcart  is now pending state"
        })
    },
    extraReducers: (builder) => {
        builder.addCase(addedtoCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "added to cart  Data successfully";
            state.cartData = action.payload
        });
        builder.addCase(addedtoCart.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "added to cart  Data is pending";
        })

        builder.addCase(addedtoCart.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "added to cart is now pending stage"

        })
    },


    extraReducers: (builder) => {
        builder.addCase(updateCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "update to cart  Data successfully";
            state.cartData = action.payload
        });
        builder.addCase(updateCart.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "update to cart is pending";
        })

        builder.addCase(updateCart.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "update to cart is now pending state"

        })
    },

    extraReducers: (builder) => {
        builder.addCase(clearCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "clear to cart  Data successfully";
            state.cartData = action.payload
        });
        builder.addCase(clearCart.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "clear to cart is pending";
        })

        builder.addCase(clearCart.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "clear to cart is now pending state"

        })
    },
    extraReducers: (builder) => {
        builder.addCase(deleteCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isMessage = "delete cart successfully";
            state.cartData = action.payload
        });
        builder.addCase(deleteCart.pending, (state, action) => {
            state.isLoading = true;
            state.isMessage = "delete is now pending";
        })

        builder.addCase(deleteCart.rejected, (state, action) => {
            state.isLoading = true;
            state.isMessage = "delete cart is now pending state"

        })
    }
})


export default cartslice.reducer