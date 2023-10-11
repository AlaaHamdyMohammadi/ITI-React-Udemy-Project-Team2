import { createSlice } from "@reduxjs/toolkit"


const CatRatingFilteredCoursesSlice = createSlice({
  name: "CatRatingFilteredCourses",
    initialState: { CatRatingFilteredCourses: [] },
  reducers: {
    setCatRatingFilteredCourses: function (state, action) {
      state.CatRatingFilteredCourses = action.payload
    }
  }
})
export const {setCatRatingFilteredCourses} = CatRatingFilteredCoursesSlice.actions  


export default CatRatingFilteredCoursesSlice.reducer
