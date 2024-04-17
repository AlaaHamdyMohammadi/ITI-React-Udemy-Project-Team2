import { createSlice } from '@reduxjs/toolkit';

const categoryCourseSlice = createSlice({
  name: 'categoryCourse',
  initialState: { categoryCourse: {} },
  reducers: {
    setcategoryCourse: function (state, action) {
      state.categoryCourse = action.payload;
    },
  },
});
export const { setcategoryCourse } = categoryCourseSlice.actions;

export default categoryCourseSlice.reducer;
