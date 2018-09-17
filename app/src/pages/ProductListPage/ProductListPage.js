import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './../../actions/actionRequest';

class ProductListPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     }
    // }
    componentDidMount() {
        // callAPI("/products", 'GET', null).then((res) => {
        //     // this.setState({
        //     //     products: Response.data
        //     // });
        //     this.props.getProductList(res.data);
        // });
        this.props.getProductList();
    }

    render() {
        let {products} = this.props;
        // let { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" type="button" className="btn btn-primary mb-10">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                );
            });
        }
        return result;
    }

    onDeleteProduct = (id) => {
        // callAPI(`/products/${id}`, 'DELETE', null).then((response) => {
        //     if (response.status === 200) { //OK
        //         let { products } = this.state;
        //         let index = this.findIndex(products, id);
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             });
        //         }
        //     }
        // });
        this.props.deleteProduct(id);
    }

    
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        getProductList: () => {
            dispatch(Actions.actionGetProductListRequest());
        },
        deleteProduct: (id) => {
            dispatch(Actions.actionDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);