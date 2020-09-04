import { createStore } from 'redux';
import globalStateReducer from '../reducers/globalStateReducer'

const store = createStore(globalStateReducer)
export default store