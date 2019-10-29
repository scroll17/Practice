import React, { useState } from "react"

import connect from "react-redux/es/connect/connect";

import ProductButton from "../ProductButton/ProductButton";

import { addProductToBasket } from "../../../actions/actionCreators/actionCreators";

function BuyProduct(props) {
    const { data } = props;

    const [count, setCount] = useState(1);


    const upCount = () => {
        setCount(count => count + 1)
    };


    const downCount = () => {
        if(count === 1){
            setCount( 1)
        }else {
            setCount( count => count - 1)
        }
    };


    const buyProduct = () => {
        props.addProductToBasket(data, count);
        setCount(1);
    };


    return (
        <ProductButton count={count} downCount={downCount} upCount={upCount}>
            <p onClick={buyProduct}>
                До кошику
            </p>
        </ProductButton>
    )

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    addProductToBasket: (item, col) => dispatch(addProductToBasket(item, col)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BuyProduct);
