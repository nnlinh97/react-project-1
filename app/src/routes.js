import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import UserListPage from './pages/UserListPage/UserListPage';
import UserActionPage from './pages/UserActionPage/UserActionPage';

const routes = [
    //=======Home============
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },

    //=========Product=========
    {
        path: "/product-list",
        exact: false,
        main: () => <ProductListPage/>
    },
    {
        path: "/product/add",
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: "/product/:id/edit",
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },

    //=========User=========
    {
        path: "/user-list",
        exact: false,
        main: () => <UserListPage/>
    },
    {
        path: "/user/add",
        exact: false,
        main: ({history}) => <UserActionPage history={history}/>
    },
    {
        path: "/user/:id",
        exact: false,
        main: ({match, history}) => <UserActionPage match={match} history={history}/>
    },

    //========Page Not Found============
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage/>
    },
];

export default routes;