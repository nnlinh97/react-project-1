import * as Types from './../constants/ActionTypes';

let initialState = {};

const productEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_PRODUCT_ITEM:
            return action.product;
        default: return [...state];
    }
}

export default productEditing;