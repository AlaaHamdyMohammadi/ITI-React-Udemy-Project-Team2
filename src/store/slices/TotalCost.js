import { createSlice } from "@reduxjs/toolkit"


const TotalCostSlice = createSlice({
  name: "TotalCost",
  initialState: { TotalCost: 0 },
  reducers: {
    setTotalCost: function (state, action) {
      state.TotalCost = action.payload
    }
  }
})
export const {setTotalCost} = TotalCostSlice.actions  


export default TotalCostSlice.reducer
