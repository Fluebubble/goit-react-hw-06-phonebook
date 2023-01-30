import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filterSliceReducer } from './slices/filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
