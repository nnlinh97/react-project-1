import * as Types from './../constants/ActionTypes';

// ===================Product====================
export const actionGetProductList = (products) => {
    return {
        type: Types.GET_PRODUCT_LIST,
        products: products
    }
}

export const actionDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id
    }
}

export const actionAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product: product
    }
}

export const actionGetProductItem = (product) => {
    return {
        type: Types.GET_PRODUCT_ITEM,
        product: product
    }
}

export const actionUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product: product
    }
}

//=====================User====================

export const actionGetUserList = (users) => {
    return {
        type: Types.GET_USER_LIST,
        users: users
    }
}

export const actionDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id: id
    }
}

export const actionAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user: user
    }
}

export const actionGetUserItem = (user) => {
    return {
        type: Types.GET_USER_ITEM,
        user: user
    }
}

export const actionUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user: user
    }
}