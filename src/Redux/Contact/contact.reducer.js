import * as types from "./contact.actionType";

const initState = {
  contact: [],
  selectedEditedContact:{}
};

export const contactReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CONTACT_ITEMS:
      return { ...state };
    case types.ADD_CONTACT_ITEM:
      return { ...state, contact: [...state.contact, payload] };
    case types.EDIT_CONTACT_ITEM:
      return {
        ...state,
        contact: state.contact.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case types.DELETE_CONTACT_ITEM:
      return {
        ...state,
        contact: state.contact.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
