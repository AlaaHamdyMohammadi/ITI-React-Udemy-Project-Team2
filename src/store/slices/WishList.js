import { createSlice } from "@reduxjs/toolkit"


const wishListSlice = createSlice({
  name: "wishList",
  initialState: { wishList:  (JSON.parse(localStorage.getItem("wishList")))?JSON.parse(localStorage.getItem("wishList")):[]  },
  reducers: {
    setWishList: function (state, action) {
      state.wishList = action.payload
    }
  }
})
export const {setWishList} = wishListSlice.actions  


export default wishListSlice.reducer
