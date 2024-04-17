import { createSlice } from '@reduxjs/toolkit';

const SubRatingFilteredCoursesSlice = createSlice({
  name: 'SubRatingFilteredCourses',
  initialState: { SubRatingFilteredCourses: [] },
  reducers: {
    setSubRatingFilteredCourses: function (state, action) {
      state.SubRatingFilteredCourses = action.payload;
    },
  },
});
export const { setSubRatingFilteredCourses } =
  SubRatingFilteredCoursesSlice.actions;

export default SubRatingFilteredCoursesSlice.reducer;
