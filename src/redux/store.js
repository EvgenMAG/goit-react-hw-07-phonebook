// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducers from '../redux/contacts/contacts-reducer';

// ========ToolKit =======

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const middleware = [...getDefaultMiddleware(), logger];

const contactsReducer = combineReducers({
  items: reducers.itemsReducers,
  filter: reducers.filterReducer,
  loading: reducers.loading,
});

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

let store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

// let persistor = persistStore(store);

export default store;

// =================================

// const contactsReducer = combineReducers({
//   items: reducers.itemsReducers,
//   filter: reducers.filterReducer,
// });
// const rootReducer = combineReducers({ contacts: contactsReducer });

// const store = configureStore(rootReducer);

// export default store;
