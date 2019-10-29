import React from "react"
import style from './ProductList.module.sass'

import Product from "./Product/Product";
import BuyProduct from "../Buttons/BuyProduct/BuyProduct";


function ProductList(props) {
    const { products } = props;

    return(
        <ul className={style.list}>
            {products.map( product => (
                <Product
                    data={product}
                    key={product.id}
                >
                    <BuyProduct data={product}/>
                </Product>
            ))}
        </ul>
    )

}
export default ProductList