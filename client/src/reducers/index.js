import { combineReducers } from 'redux';
import notes from './notes';
import 'materialize-css/dist/css/materialize.min.css'

const rootReducer = combineReducers({ notes, });

export default rootReducer;