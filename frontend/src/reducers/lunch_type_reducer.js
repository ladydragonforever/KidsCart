import { RECEIVE_LUNCH_TYPE } from '../actions/lunch_type_actions';

const lunchTypeReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_LUNCH_TYPE:
            nextState = action.typeFood
            return nextState
        default:
            return state;
    }
}

export default lunchTypeReducer