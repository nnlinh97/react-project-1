import * as Types from './../constants/ActionTypes';
import * as UTILS from './../utils/index';

let initialState = [];
const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.GET_USER_LIST:
            state = action.users;
            return [...state];
        case Types.DELETE_USER:
            index = UTILS.findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_USER: 
            return [...state, action.user];
        case Types.UPDATE_USER:
            index = UTILS.findIndex(state, action.user.id);
            state[index] = action.user;
            return [...state];
        default: return [...state];
    }
}

export default products;