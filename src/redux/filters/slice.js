import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        name: '',
    },
    reducers: {
        setFilter(state, action) {
            state.name = action.payload;
            return state;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;