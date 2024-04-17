import { createSlice } from '@reduxjs/toolkit';

const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cartItems'))
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  reducers: {
    setCartItems: function (state, action) {
      state.cartItems = action.payload;
    },
  },
});
export const { setCartItems } = cartItemSlice.actions;

export default cartItemSlice.reducer;
