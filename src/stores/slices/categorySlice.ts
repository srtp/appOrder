/* eslint-disable no-param-reassign */
import { category } from '@models/interfaces/TypeFood';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:category = {
  title: 'all',
  i18n: 'ทั้งหมด',
};

export const categorySlice = createSlice({
  name: 'categoryStore',
  initialState,
  reducers: {
    setActive: (state:category, action:PayloadAction<category>) => {
      state.title = action.payload.title;
      state.i18n = action.payload.i18n;
    },
  },

});

export const { setActive } = categorySlice.actions;
export default categorySlice.reducer;
