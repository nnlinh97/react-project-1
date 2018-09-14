import * as Types from './../constants/ActionTypes';
import callAPI from '../utils/callAPI';


export const actionGetProductListRequest = () => {
    return (dispatch) => {
        return callAPI("/products", "GET", null).then((res) => {
            dispatch(actionGetProductList(res.data));
        });
    }
}

export const actionGetProductList = (products) => {
    return {
        type: Types.GET_PRODUCT_LIST,
        products: products
    }
}