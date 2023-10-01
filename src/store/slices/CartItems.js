import { createSlice } from "@reduxjs/toolkit"


const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: { cartItems: [] },
  reducers: {
    setCartItems: function (state, action) {
      state.cartItems = action.payload
    }
  }
})
export const {setCartItems} = cartItemSlice.actions  


export default cartItemSlice.reducer
