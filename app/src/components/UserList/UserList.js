import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Người Dùng</h3>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Tên Người Dùng</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </th>
                                <th>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserList;