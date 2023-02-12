import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterSearch: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
