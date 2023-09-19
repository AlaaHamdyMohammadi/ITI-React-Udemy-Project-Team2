import { createSlice } from "@reduxjs/toolkit"


const ScrollBarSlice = createSlice({
  name: "ScrollBar",
  initialState: { ScrollBar: false },
  reducers: {
    changeScrollBar: function (state, action) {
      state.ScrollBar = action.payload
    }
  }
})
export const {changeScrollBar} = ScrollBarSlice.actions  


export default ScrollBarSlice.reducer
