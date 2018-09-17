import callAPI from '../utils/callAPI';
import * as Action from './index';

//===========================Product==============================
export const actionGetProductListRequest = () => {
    return (dispatch) => {
        return callAPI("/products", "GET", null).then((res) => {
            dispatch(Action.actionGetProductList(res.data));
        });
    }
}

export const actionDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`/products/${id}`, "DELETE", null).then((res) => {
            dispatch(Action.actionDeleteProduct(id));
        });
    }
}

export const actionAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI("/products", "POST", product).then((res) => {
            dispatch(Action.actionAddProduct(res.data));
        });
    }
}

export const actionGetProductItemRequest = (id) => {
    return (dispatch) => {
        return callAPI(`/products/${id}`, "GET", null).then((res) => {
            dispatch(Action.actionGetProductItem(res.data));
        })
    }
}

export const actionUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callAPI(`/products/${product.id}`, "PUT", product).then((res) => {
            dispatch(Action.actionUpdateProduct(res.data));
        });
    }
}

//===========================User==============================

export const actionGetUserListRequest = () => {
    return (dispatch) => {
        return callAPI('/users', 'GET', null).then((res) => {
            dispatch(Action.actionGetUserList(res.data));
        });
    }
}

export const actionDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callAPI(`/users/${id}`, 'DELETE', null).then((res) => {
            dispatch(Action.actionDeleteUser(id));
        });
    };
}

export const actionAddUserRequest = (user) => {
    return (dispatch) => {
        return callAPI("/users", "POST", user).then((res) => {
            dispatch(Action.actionAddUser(res.data));
        });
    };
}

export const actionGetUserItemRequest = (id) => {
    return (dispatch) => {
        return callAPI(`/users/${id}`, 'GET', null).then((res) => {
            dispatch(Action.actionGetUserItem(res.data));
        });
    };
};
export const actionUpdateUserRequest = (user) => {
    return (dispatch) => {
        return callAPI(`/users/${user.id}`, 'PUT', user).then((res) => {
            dispatch(Action.actionUpdateUser(res.data));
        })
    }
}