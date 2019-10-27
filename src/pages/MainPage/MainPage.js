import React, { Component } from 'react';
import style from "./MainPage.module.sass"

import connect from "react-redux/es/connect/connect";

import ProductList from "../../components/ProductList/ProductList";

import { size } from "lodash"

class MainPage extends Component{

    renderAllCategories(categories){

        return categories.map( category => {

            if(size(category) > 0){
                return(
                    <div className={style.section} key={category.title}>
                        <h2>
                            <i className={category.icon} />
                            {category.title}
                        </h2>
                        <ProductList products={category.products}/>
                    </div>
                )
            }else {
                return null
            }

        })
    }

    renderFoundProduct(products){
        return (
            <div className={style.section}>
                <ProductList products={products}/>
            </div>
        )
    }

    render() {

        return (
            <div className={style.main}>

                <main>
                    {
                        size(this.props.productFound) > 0 ?
                            this.renderFoundProduct(this.props.productFound)
                            :
                            this.renderAllCategories(this.props.allProduct)
                    }
                </main>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    allProduct: state.mainReducer.allProduct,
    productFound: state.mainReducer.productFound
});
export default connect(mapStateToProps)(MainPage);
