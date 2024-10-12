import { createSlice } from "@reduxjs/toolkit"
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact
} from "./operations"
import {
  logout
} from "../auth/operations"
import {
  toast
} from 'react-hot-toast';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.loading = false
        toast.success('Contact added successfully');
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false
        state.error = true
        toast.error('Failed to add contact');
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
        state.loading = false
        toast.success('Contact deleted successfully');
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false
        state.error = true
        toast.error('Failed to delete contact');
      })
      .addCase(updateContact.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
        toast.success('Contact updated successfully');
      })
      .addCase(updateContact.rejected, (state) => {
        state.loading = false
        state.error = true
        toast.error('Failed to update contact');
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.items = [],
        state.loading = false,
        state.error = null
      })
  }
})

export default slice.reducer;