import { createSlice } from "@reduxjs/toolkit"


const navbarSlice = createSlice({
  name: "navbar",
  initialState: { navbar: true },
  reducers: {
    changeNavbar: function (state, action) {
      state.navbar = action.payload
    }
  }
})
export const {changeNavbar} = navbarSlice.actions  


export default navbarSlice.reducer
