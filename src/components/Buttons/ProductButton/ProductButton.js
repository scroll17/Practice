import React, { useEffect } from "react"
import style from './ProductButton.module.sass'

import connect from "react-redux/es/connect/connect";


function ProductButton(props) {
    const { basket, upCount, downCount, count, additionalText } = props;

    useEffect(() => {
        sessionStorage.setItem("basket", JSON.stringify(basket))
    }, [basket]);

    const standardStructure = (
        <div className={style.productButton}>

            {props.children}

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
    );

    if(additionalText){
        return (
            <div className={style.additionalBlock}>
                <p>{additionalText}</p>
                {standardStructure}
            </div>
        )
    }else{
        return standardStructure
    }

}

const mapStateToProps = (state) => ({
    basket: state.mainReducer.basket
});
export default connect(mapStateToProps)(ProductButton);
