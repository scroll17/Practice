import React from "react"
import style from './Product.module.sass';


function Product(props) {
    const { data, children } = props;

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

                {children(data)}

            </div>
        </li>
    )

}


export default Product;
