import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = state => state.filter.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, nameFilter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter));
    }
)