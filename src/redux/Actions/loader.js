import {
  CONTACT_REQUEST_START,
  CONTACT_REQUEST_SUCCESS,
  CONTACT_DELETE_START,
  CONTACT_DELETE_SUCCESS,
} from "../Types";

export const activeLoader = () => ({
  type: CONTACT_REQUEST_START,
});

export const inactiveLoader = () => ({
  type: CONTACT_REQUEST_SUCCESS,
});

export const deleteLoaderActive = () => ({
  type: CONTACT_DELETE_START,
});

export const deleteLoaderInactive = () => ({
  type: CONTACT_DELETE_SUCCESS,
});
