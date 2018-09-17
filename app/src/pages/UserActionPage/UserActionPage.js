import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as Action from './../../actions/actionRequest';

class UserActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            gender: "MALE"
        }
    }

    componentDidMount = () => {
        let { match } = this.props;
        if (match) {
            let { id } = match.params;
            this.props.getUserItem(id);
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.userEditing) {
            let { id, name, email, gender } = nextProps.userEditing;
            this.setState({
                id: id,
                name: name,
                email: email,
                gender: gender
            })
        }
    }


    render() {
        let { id, name, email, gender } = this.state;
        let title = id === "" ? "Add User Form" : "Edit User Form";
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <legend>{title}</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.onChange} value={name} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.onChange} value={email} name="email" type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select onChange={this.onChange} value={gender} name="gender" className="form-control">
                            <option value={"MALE"}>MALE</option>
                            <option value={"FEMALE"}>FEMALE</option>
                        </select>
                    </div>
                    <Link to="/user-list" type="button" className="btn btn-danger mr-10">
                        <span className="glyphicon glyphicon-thumbs-down"></span>
                        &nbsp;Hủy
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        <span className="glyphicon glyphicon-thumbs-up"></span>
                        &nbsp;Lưu Lại
                    </button>
                </form>
            </div>
        );
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        let { history } = this.props;
        let { id, name, email, gender } = this.state;
        let user = {
            id: id,
            name: name,
            email: email,
            gender: gender
        }
        if (id === "") {
            this.props.addUser(user);
            history.goBack();
        }else{
            this.props.updateUser(user);
            history.goBack()
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userEditing: state.userEditing
    };
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        addUser: (user) => {
            dispatch(Action.actionAddUserRequest(user));
        },
        getUserItem: (id) => {
            dispatch(Action.actionGetUserItemRequest(id));
        },
        updateUser: (user) => {
            dispatch(Action.actionUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);