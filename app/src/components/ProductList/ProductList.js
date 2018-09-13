import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">

                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã SP</th>
                                <th>Tên SP</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
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

export default ProductList;