import {
  CONTACT_REQUEST_START,
  CONTACT_REQUEST_SUCCESS,
  CONTACT_DELETE_START,
  CONTACT_DELETE_SUCCESS,
} from "../Types";
const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case CONTACT_REQUEST_START:
    case CONTACT_DELETE_START:
      return true;

    case CONTACT_REQUEST_SUCCESS:
    case CONTACT_DELETE_SUCCESS:
      return false;

    default:
      return state;
  }
};
