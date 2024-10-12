import {
    selectTextFilter
  } from "../filters/selectors"
  import {
    createSelector
  } from "@reduxjs/toolkit"
  
  export const selectItemsContacts = (state) => state.contacts.items;
  
  export const selectLoadingContacts = (state) => state.contacts.loading;
  
  export const selectErrorContacts = (state) => state.contacts.error;
  
  // memoised difficult selector filter with createSelector
  export const selectFilteredContacts = createSelector([selectItemsContacts, selectTextFilter], (contacts, textFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase()) ||
      contact.number.toLowerCase().includes(textFilter.toLowerCase())
    );
  })