import React from "react"
import style from './ProductList.module.sass'

import Product from "./Product/Product";

function ProductList(props) {
    const { products } = props;

    return(
        <ul className={style.list}>
            {products.map( product => (
                <Product data={product} key={product.id}/>
            ))}
        </ul>
    )

}
export default ProductList