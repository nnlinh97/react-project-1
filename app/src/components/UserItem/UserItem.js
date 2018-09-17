import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class UserItem extends Component {
    render() {
        let {index, user} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email} </td>
                <td>{user.gender} </td>
                <td>
                    <Link to={`/user/${user.id}`} type="button" className="btn btn-info">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                </td>
                <td>
                    <button onClick={() => this.onDeleteUser(user.id)} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </td>
            </tr>
        );
    }
    onDeleteUser = (id) => {
        if(confirm("Bạn chắc chắn muốn xóa?")){ //eslint-disable-line
            this.props.onDeleteUser(id);
        }
    }
}

export default UserItem;