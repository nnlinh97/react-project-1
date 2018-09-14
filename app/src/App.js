import React, { Component } from 'react';
import './App.css'
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//finish 93
// middleware trong redux là lớp nằm giữa reducers và dispatch action giúp trì hoãn việc dispatch (get data xong mới dispatch)
// hoạt động: 
    //trước khi reducers nhận được action 
    //sau khi action nhận được dispatch
//thường dùng để xử lý các async action (API request)
//một số thư viện: redux-thunk, redux-saga, redux-overvable, redux-promise
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
