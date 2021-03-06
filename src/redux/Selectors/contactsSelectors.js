import { createSelector } from "reselect";

export const contactsSelector = (state) => state.contacts;
export const filterSelector = (state) => state.filter;
export const loaderSelector = (state) => state.loader;
export const errorSelector = (state) => state.error;

export const filteredContacts = createSelector(
  [contactsSelector, filterSelector],
  (arr, filter) => {
    return arr.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
