import { combineReducers } from 'redux'
import ContactReducer from './contactReducer';
import SelectionReducer from './selectReducer';




export default combineReducers({
    contacts : ContactReducer,
    selection : SelectionReducer
})



// const initialState = {

// }


// const reducer = (state = initialState , action) => {
//     return state
// }