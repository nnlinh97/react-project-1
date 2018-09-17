import * as Types from './../constants/ActionTypes';

let initialState = {};

const productEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_USER_ITEM:
            return action.user;
        default: return [...state];
    }
}

export default productEditing;