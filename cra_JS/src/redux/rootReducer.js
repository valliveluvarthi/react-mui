import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import userReducer from './slices/users';
import articleReducer from './slices/articles';
import docListReducer from './slices/docList';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  user : userReducer,
  article : articleReducer,
  docList : docListReducer,
});

export { rootPersistConfig, rootReducer };
