import { combineReducers } from 'redux';
import products from './products';
import productEditing from './productEditing';
import users from './users';
import userEditing from './userEditing';

const appReducers = combineReducers({
    products,
    productEditing,
    users,
    userEditing
});

export default appReducers;