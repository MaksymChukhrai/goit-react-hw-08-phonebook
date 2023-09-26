import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter;
export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;



