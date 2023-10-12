import { createSlice } from "@reduxjs/toolkit"


const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    favorites: [],
    wishList: JSON.parse(localStorage.getItem('wishList'))
      ? JSON.parse(localStorage.getItem('wishList'))
      : [],
  },
  reducers: {
    setWishList: function (state, action) {
      state.wishList = action.payload;
    },

    addFavorite: function (state, action) {
      const course = state.favorites.find((item) => item._id == action.payload._id);
      if (!course) {
        state.favorites.push(action.payload);
        //state.count += 1;
      } else {
        state.favorites = state.favorites.filter(
          (item) => item._id != action.payload._id,
        );
      }
    },
  },
});
export const { addFavorite, setWishList } = wishListSlice.actions;  


export default wishListSlice.reducer
