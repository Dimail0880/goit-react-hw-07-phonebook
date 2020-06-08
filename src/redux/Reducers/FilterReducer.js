// import { FILTER_CONTACTS } from "../Types/index";
import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "../Actions/PhoneBookActions";

export default createReducer("", {
  [filterContacts]: (state, action) => (state = action.payload),
});

// const initialState = "";
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case FILTER_CONTACTS:
//       return (state = action.payload);

//     default:
//       return state;
//   }
// };
