import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducers';
import SeletionReducers from './SelectionReducers';

export default combineReducers({
  libraries: LibraryReducers,
  selectedLibraryId: SeletionReducers
});