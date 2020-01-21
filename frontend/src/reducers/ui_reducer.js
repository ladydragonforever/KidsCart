import { combineReducers } from 'redux'
import modalReducer from './modal_reducer'
import lunchTypeReducer from './lunch_type_reducer'


const uiReducer = combineReducers({
   modal: modalReducer,
   lunchType: lunchTypeReducer
})

export default uiReducer;