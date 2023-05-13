import * as types from "./contact.actionType";

export const getContactItems = () => (dispatch) => {
  dispatch({ type: types.GET_CONTACT_ITEMS });
};

export const addContactItem = (payload) => ({
  type: types.ADD_CONTACT_ITEM,
  payload,
});

export const editContactItem = (payload) => ({
  type: types.EDIT_CONTACT_ITEM,
  payload,
});

export const deleteContactItem = (payload) => ({
  type: types.DELETE_CONTACT_ITEM,
  payload,
});
