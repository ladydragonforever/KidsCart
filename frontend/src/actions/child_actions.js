// fetch child catagory/ingredients
import { createChild, deleteChild } from "../util/child_util";

export const RECEIVE_CHILD_NAME = "RECEIVE_CHILD_NAME";
export const RECEIVE_CHILD_AGE = "RECEIVE_CHILD_AGE";
export const RECEIVE_CHILD_GENDER = "RECEIVE_CHILD_GENDER"
export const RECEIVE_CHILD_CATEGORY = "RECEIVE_CHILD_CATEGORY";
export const RECEIVE_CHILD_INGREDIENT = "RECEIVE_CHILD_INGREDIENT";
export const RECEIVE_CHILD = 'RECEIVE_CHILD'
export const DELETE_CHILD = 'DELETE_CHILD'

export const receiveChildName = name => ({
    type: RECEIVE_CHILD_NAME,
    name
});

export const receiveChildAge = age => ({
    type: RECEIVE_CHILD_AGE,
    age
});

export const receiveChildGender = gender => ({
    type: RECEIVE_CHILD_GENDER,
    gender
});

export const receiveChildIngredient = ingredient => ({
    type: RECEIVE_CHILD_INGREDIENT,
    ingredient
});

export const receiveChildCategory = category => ({
    type: RECEIVE_CHILD_CATEGORY,
    category
});

const receiveChild = child => ({
    type: RECEIVE_CHILD,
    child
})

const removeChild = childId => ({
    type: DELETE_CHILD,
    childId
})


export const createAChild = (childData, userId) => dispatch => (
    createChild(childData,userId)
        .then(child => dispatch(receiveChild(child)))
        .catch(err => console.log(err))
);

export const deleteAChild = childId => dispatch => (
    deleteChild(childId)
        .then(() => dispatch(removeChild(childId)))
        .catch(err => console.log(err))
)
