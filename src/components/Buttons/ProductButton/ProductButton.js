import React, { useState, useEffect } from "react"
import style from './ProductButton.module.sass'

import connect from "react-redux/es/connect/connect";

import { addProductToBasket, deleteProductFromBasket } from "../../../actions/actionCreators/actionCreators";
import { TYPE_BUTTON } from "../../../constants";

function Product(props) {
    const { data, type } = props;

    const [count, setCount] = useState(1);

    useEffect(() => {
        if(type === TYPE_BUTTON.DELETE){
            setCount(data.col)
        }
    }, []);


    const upCount = () => {
        if(type === TYPE_BUTTON.DELETE){
            if(count === data.col){
                setCount(data.col)
            }else {
                setCount(count => count + 1)
            }
        }else{
            setCount(count => count + 1)
        }

    };


    const downCount = () => {
        if(count === 0){
            setCount( 0)
        }else {
            setCount( count => count - 1)
        }
    };



    const buyProduct = () => {
        props.addProductToBasket(data, count);
        setCount(1);
    };


    const deleteProduct = () => {
        props.deleteProductFromBasket(data, count);
        setCount(data.col - count)
    };

    return (
        <div className={style.productButton}>

            {type === TYPE_BUTTON.BUY ?
                <p onClick={buyProduct}>
                    До кошику
                </p>
                :
                <p onClick={deleteProduct}>
                    Видалити
                </p>
            }

            <p>
                {count}
            </p>

            <p>
                <i className="fas fa-plus"
                   onClick={upCount}
                />
                <i className="fas fa-minus"
                   onClick={downCount}
                />
            </p>
        </div>
    )

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    addProductToBasket: (item, col) => dispatch(addProductToBasket(item, col)),
    deleteProductFromBasket: (item, col) => dispatch(deleteProductFromBasket(item, col)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
