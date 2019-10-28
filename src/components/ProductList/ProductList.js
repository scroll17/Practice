import React from "react"
import style from './ProductList.module.sass'

import Product from "./Product/Product";
import ProductButton from "../Buttons/ProductButton/ProductButton";

import { TYPE_BUTTON } from '../../constants'

function ProductList(props) {
    const { products } = props;

    return(
        <ul className={style.list}>
            {products.map( product => (
                <Product
                    children={(data) => <ProductButton type={TYPE_BUTTON.BUY} data={data}/>}
                    data={product}
                    key={product.id}
                />
            ))}
        </ul>
    )

}
export default ProductList