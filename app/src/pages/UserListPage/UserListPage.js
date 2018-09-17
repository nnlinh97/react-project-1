import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserList from '../../components/UserList/UserList';
import UserItem from '../../components/UserItem/UserItem';
import * as Actions from '../../actions/actionRequest';

class UserListPage extends Component {
    componentDidMount() {
        this.props.getUserList();
    }
    render() {
        let {users} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/user/add" type="button" className="btn btn-primary mb-10">
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                Thêm User
            </Link>
            <UserList>
                {this.showUsers(users)}
            </UserList>
        </div>
        );
    }
    showUsers = (users) => {
        let result = null;
        if(users.length > 0){
            result = users.map((user, index) => {
                return <UserItem 
                            key={index}
                            user={user}
                            index={index}
                            onDeleteUser={this.onDeleteUser}
                        />
            })
        }
        return result;
    }
    onDeleteUser = (id) => {
        this.props.deleteUser(id);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        getUserList: () => {
            dispatch(Actions.actionGetUserListRequest());
        },
        deleteUser: (id) => {
            dispatch(Actions.actionDeleteUserRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);