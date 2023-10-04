import { createSlice } from "@reduxjs/toolkit"


const TotalCostSlice = createSlice({
  name: "TotalCost",
  initialState: { TotalCost: (Number(localStorage.getItem("TotalPrice")))?Number(localStorage.getItem("TotalPrice")): 0 },
  reducers: {
    setTotalCost: function (state, action) {
      state.TotalCost = action.payload
    }
  }
})
export const {setTotalCost} = TotalCostSlice.actions  


export default TotalCostSlice.reducer
