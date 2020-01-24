import {
    RECEIVE_USER,
} from '../actions/user_action';


const childReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            nextState = action.user
            return nextState
        default:
            return state;
    }
}

export default childReducer