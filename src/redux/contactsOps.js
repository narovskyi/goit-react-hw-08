import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://667434d275872d0e0a958845.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
    
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkApi) => {
    try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})