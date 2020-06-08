import { createReducer } from "@reduxjs/toolkit";
import { deleteItem, addItem } from "../Actions/PhoneBookActions";

let initialState = [];

export default createReducer(initialState, {
  [addItem]: (state, action) => [...state, action.payload],
  [deleteItem]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
