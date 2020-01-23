import { RECEIVE_CHILD,
        RECEIVE_CHILD_NAME,
        RECEIVE_CHILD_AGE, 
        RECEIVE_CHILD_CATEGORY, 
        RECEIVE_CHILD_INGREDIENT, 
        RECEIVE_CHILD_GENDER 
    } from '../actions/child_actions';
    
const defaultState = {
    name: "",
    age: "",
    gender: "",
    category: "",
    ingredient: []
}

const childReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CHILD_NAME:
            nextState["name"] = action.name
            return nextState
        case RECEIVE_CHILD_AGE:
            nextState["age"] = action.age
            return nextState
        case RECEIVE_CHILD_GENDER:
            nextState["gender"] = action.gender
            return nextState
        case RECEIVE_CHILD_CATEGORY:
            nextState["category"] = action.category
            return nextState
        case RECEIVE_CHILD_INGREDIENT:
            nextState["ingredient"] = action.ingredient
            return nextState
        case RECEIVE_CHILD:
            nextState = action.child
            return nextState
        default:
            return state;
    }
}

export default childReducer