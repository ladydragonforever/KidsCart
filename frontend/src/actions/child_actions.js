// fetch child catagory/ingredients

export const RECEIVE_CHILD_NAME = "RECEIVE_CHILD_NAME";
export const RECEIVE_CHILD_AGE = "RECEIVE_CHILD_AGE";
export const RECEIVE_CHILD_GENDER = "RECEIVE_CHILD_GENDER"
export const RECEIVE_CHILD_CATEGORY = "RECEIVE_CHILD_CATEGORY";
export const RECEIVE_CHILD_INGREDIENT = "RECEIVE_CHILD_INGREDIENT";


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
