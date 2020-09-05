import { createStore } from 'redux';
import globalStateReducer from '../reducers/globalStateReducer'

export default createStore(globalStateReducer)
