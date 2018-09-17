import * as Types from './../constants/ActionTypes';
import * as UTILS from './../utils/index';

let initialState = [];
const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.GET_PRODUCT_LIST:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT:
            index = UTILS.findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];

        case Types.ADD_PRODUCT:
            // state.push(action.product);
            return [...state, action.product];

        case Types.UPDATE_PRODUCT:
            index = UTILS.findIndex(state, action.product.id);
            if(index !== -1) {
                state[index] = action.product;
            }
        return [...state];
        default: return [...state];
    }
}

export default products;