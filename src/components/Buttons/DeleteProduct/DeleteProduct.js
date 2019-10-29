import React, { useState } from "react"

import connect from "react-redux/es/connect/connect";

import ProductButton from "../ProductButton/ProductButton";

import { deleteProductFromBasket } from "../../../actions/actionCreators/actionCreators";


function DeleteProduct(props) {
    const { data } = props;

    const [count, setCount] = useState(1);


    const upCount = () => {
        if(count === data.col){
            setCount(data.col)
        }else {
            setCount(count => count + 1)
        }
    };


    const downCount = () => {
        if(count === 1){
            setCount( 1)
        }else {
            setCount( count => count - 1)
        }
    };

    const deleteProduct = () => {
        props.deleteProductFromBasket(data, count);
        setCount(1)
    };

    return (
        <ProductButton
            count={count}
            downCount={downCount}
            upCount={upCount}
            additionalText={`Всього: ${data.col}`}
        >
            <p onClick={deleteProduct} style={{backgroundColor: "red"}}>
                Видалити
            </p>
        </ProductButton>
    )

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    deleteProductFromBasket: (item, col) => dispatch(deleteProductFromBasket(item, col)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
