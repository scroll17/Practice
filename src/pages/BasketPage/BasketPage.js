import React, { Component } from 'react';

import style from "./BasketPage.module.sass";
import MainPageStyle from "../MainPage/MainPage.module.sass"

import Product from "../../components/ProductList/Product/Product";

import connect from "react-redux/es/connect/connect";
import BuyProduct from "../../components/Buttons/BuyProduct/BuyProduct";
import DeleteProduct from "../../components/Buttons/DeleteProduct/DeleteProduct";

import { sortArrayDate, sortObjectDate } from "../../utils/sortDate"

import { size, isUndefined } from "lodash"

import moment from "moment"

class BasketPage extends Component{

    renderProducts(products){
        const listWithDate = {};

        products.forEach( (product) => {
            const date = moment(product.date).format("YYYY DD MM");

            if(isUndefined(listWithDate[date])){
                listWithDate[date] = [product]
            }else{
                listWithDate[date].push(product)
            }

        });


        const arrayOfDateProducts = Object.keys(listWithDate).sort(sortArrayDate);

        return arrayOfDateProducts.map(date => {
            const sortProductInBasket = listWithDate[date].sort(sortObjectDate)

            return(
                <div key={date} className={style.container}>
                    <h1 className={style.date}>
                        {date}
                    </h1>

                    <ul className={style.list}>
                        {sortProductInBasket.map( product => {

                            return (
                                <Product
                                    data={product}
                                    key={product.id}
                                >
                                    <div style={{width: "100%"}}>
                                        <DeleteProduct data={product} />
                                        <BuyProduct data={product} />
                                    </div>
                                </Product>
                            )
                        })}
                    </ul>
                </div>
            )
        });

    }

    render() {
        return (
            <div className={MainPageStyle.main}>
                {size(this.props.productFound) > 0 ?
                    this.renderProducts(this.props.productFound)
                    :
                    this.renderProducts(this.props.basket)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    basket: state.mainReducer.basket,
    productFound: state.mainReducer.productFound
});
export default connect(mapStateToProps)(BasketPage);
