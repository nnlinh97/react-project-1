import * as Types from './../constants/ActionTypes';

let initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PRODUCT_LIST:
            state = action.products;
            return [...state];
        default: return [...state];
    }
}

export default products;