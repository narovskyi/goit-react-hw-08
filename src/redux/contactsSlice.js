import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, state => {
                state.loading = false;
                state.error = true;
            })
    },
});

export const contactsReducer = contactsSlice.reducer;