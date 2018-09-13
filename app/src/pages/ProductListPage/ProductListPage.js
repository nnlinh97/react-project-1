import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import callAPI from './../../utils/callAPI';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callAPI("/products",'GET',null).then((Response) => {
            this.setState({
                products: Response.data
            });
        });
    }

    render() {
        // let {products} = this.props;
        let { products } = this.state;

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
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);