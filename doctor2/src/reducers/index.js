import { combineReducers } from 'redux';
import auth from './auth';
import consent from './consent';
import healthRecord from './healthRecord';

export default combineReducers({ auth, consent, healthRecord });
