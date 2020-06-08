import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  activeLoader,
  inactiveLoader,
  deleteLoaderActive,
  deleteLoaderInactive,
} from "./loader";
import { setError, resetError, setDeleteError } from "./error";

export const addItem = createAction("item/add");
export const deleteItem = createAction("item/delete");
export const filterContacts = createAction("contacts/filter", function prepare(
  event
) {
  return {
    payload: event.target.value,
  };
});

const options = { headers: { "Content-Type": "application/json" } };

export const asyncAddItem = (item) => async (dispatch) => {
  dispatch(activeLoader());
  try {
    dispatch(resetError());
    const result = await axios.post(
      "http://localhost:5005/contacts",
      item,
      options
    );
    dispatch(addItem(result.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(inactiveLoader());
  }
};

export const asyncDeleteItem = (id) => async (dispatch) => {
  dispatch(deleteLoaderActive());
  try {
    dispatch(resetError());
    await axios.delete(`http://localhost:5005/contacts/${id}`);
    dispatch(deleteItem(id));
  } catch (error) {
    dispatch(setDeleteError());
  } finally {
    dispatch(deleteLoaderInactive());
  }
};
