import React, { useState } from "react"
import style from './Product.module.sass'

import connect from "react-redux/es/connect/connect";

import { addProductToBasket } from "../../../actions/actionCreators/actionCreators";

function Product(props) {
    const { data } = props;

    const [count, setCount] = useState(1);

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

    return(
        <li className={style.product}>
            <div>
                <p className={style.img}>
                    <img src={data.src} alt={data.text}/>
                </p>

                <p className={style.text}>
                    {data.text}
                </p>

                <p className={style.price}>
                    {data.price}
                    <i className="fas fa-hryvnia" />
                </p>

                <div className={style.buyProduct}>
                    <span onClick={buyProduct}>
                        Купить
                    </span>
                    <span>
                        {count}
                    </span>
                    <p>
                        <span onClick={() => setCount(count => count + 1)}>
                            Up
                        </span>
                        <span onClick={downCount}>
                            Down
                        </span>
                    </p>
                </div>

            </div>
        </li>
    )

}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    addProductToBasket: (item, col) => dispatch(addProductToBasket(item, col)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
