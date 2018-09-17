import React, { Component } from 'react';
import './ProductActionPage.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as Actions from '../../actions/actionRequest';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            status: ""
        }
    }
    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let { id } = match.params;
            // callAPI(`/products/${id}`, "GET", null).then((res) => {
            //     let product = res.data;
            //     this.setState({
            //         id: product.id,
            //         name: product.name,
            //         price: product.price,
            //         status: product.status
            //     });
            // });
            this.props.editProduct(id);
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.productEditing) {
            let { id, name, price, status } = nextProps.productEditing;
            this.setState({
                id: id,
                name: name,
                price: price,
                status: status
            });
        }
    }


    render() {
        let { id, name, price, status } = this.state;
        let title = id === "" ? "Thêm Sản Phẩm" : "Sửa Sản Phẩm"
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <legend>{title}</legend>
                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input onChange={this.onChange} value={name} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input onChange={this.onChange} value={price} name="price" type="number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái</label>
                        <div className="checkbox">
                            <label>
                                <input onChange={this.onChange} value={status} name="status" type="checkbox" checked={status} />
                                Còn Hàng
                            </label>
                        </div>
                    </div>
                    <Link to="/product-list" type="button" className="btn btn-danger mr-10">
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
        let value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let { history } = this.props;
        let { id, name, price, status } = this.state;
        let product = {
            id: id,
            name: name,
            price: parseInt(price, 10),
            status: status === "" ? false : status
        }
        if (id === "") {
            // callAPI("/products", "POST", {
            //     name: name,
            //     price: parseInt(price, 10),
            //     status: status === "" ? false : status
            // }).then((response) => {
            //     history.goBack(); //quay lai trang truoc do, nếu tự gõ trên url qua trang add thì khi bấm save thì nó vẫn 
            //     // history.push("/"); // đi đến trang cần thiết
            // });
            this.props.addProduct(product); //hàm addProduct này không phải promise nên không .then được
            history.goBack();
        } else {
            this.props.updateProduct(product);
            history.goBack();
            // callAPI(`/products/${id}`, "PUT", product).then((res) => {
            //     if (res.status === 200) {
            //         history.goBack();
            //     } else {
            //         console.log("ERROR");
            //     }
            // })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        productEditing: state.productEditing
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        addProduct: (product) => {
            dispatch(Actions.actionAddProductRequest(product));
        },
        editProduct: (id) => {
            dispatch(Actions.actionGetProductItemRequest(id));
        },
        updateProduct: (product) => {
            dispatch(Actions.actionUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);