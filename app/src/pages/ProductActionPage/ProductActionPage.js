import React, { Component } from 'react';
import './ProductActionPage.css';
import {Link} from "react-router-dom";

class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái</label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                Còn Hàng
                            </label>
                        </div>
                    </div>
                    <Link to="/product-list" type="submit" className="btn btn-danger mr-10">
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
}

export default ProductActionPage;