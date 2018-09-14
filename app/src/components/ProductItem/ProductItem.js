import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    render() {
        let { product, index } = this.props;
        let statusName = product.status ? "còn hàng" : "hết hàng";
        let styleStatus = product.status ? "label label-success" : "label label-danger";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                    <span className={styleStatus}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} type="button" className="btn btn-info">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                </td>
                <td>
                    <button onClick={() => this.onDeleteProduct(product.id)} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProduct = (id) => {
        //confirm phải có cái cmt bên cạnh mới chạy được
        if(confirm("Bạn chắc chắn muốn xóa?")){ //eslint-disable-line
            this.props.onDeleteProduct(id);
        }

    }
}

export default ProductItem;