import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  filterContacts,
} from './contacts-actions';
// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionsTypes from './contacts-types';

const initialState = [];

const initialFilter = '';

// ========ToolKit =======
const itemsReducers = createReducer(initialState, {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const filterReducer = createReducer(initialFilter, {
  [filterContacts]: (_, { payload }) => payload,
});
// ===============

// const itemsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionsTypes.ADD_CONTACT:
//       return [...state, action.payload];

//     case actionsTypes.REMOVE_CONTACT:
//       return state.filter(({ id }) => id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialFilter, action) => {
//   switch (action.type) {
//     case actionsTypes.CONTACT_FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };
const reducers = { itemsReducers, filterReducer, loading };

export default reducers;
