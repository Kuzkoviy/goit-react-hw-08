import { createSlice, createSelector } from "@reduxjs/toolkit"
import {
  fetchContacts,
  addContact,
  deleteContact
} from "./contactsOps"
import { selectTextFilter } from "./filtersSlice"

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.loading = false
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
        state.loading = false
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export const selectItemsContacts = (state) => state.contacts.items;

export const selectLoadingContacts = (state) => state.contacts.loading;

export const selectErrorContacts = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector([selectItemsContacts, selectTextFilter], (contacts, textFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(textFilter.toLowerCase())
  );
})

export default slice.reducer;