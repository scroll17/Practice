import React, { Component } from 'react';
import style from "../../components/ProductList/ProductList.module.sass";
import Product from "../../components/ProductList/Product/Product";
import ProductButton from "../../components/Buttons/ProductButton/ProductButton";
import {TYPE_BUTTON} from "../../constants";

import connect from "react-redux/es/connect/connect";

class BasketPage extends Component{


    render() {
        return (
            <div>
                <ul className={style.list}>
                    {this.props.basket.map( product => (
                        <Product
                            children={(data) => <ProductButton type={TYPE_BUTTON.DELETE} data={data}/>}
                            data={product}
                            key={product.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    basket: state.mainReducer.basket,
});
export default connect(mapStateToProps)(BasketPage);
