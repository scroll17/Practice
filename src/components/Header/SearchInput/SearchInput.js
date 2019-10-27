import React, { useRef } from "react";
import style from './SearchInput.module.sass'

import connect from "react-redux/es/connect/connect";

import { productSearch, clearProductFound } from "../../../actions/actionCreators/actionCreators";

function SearchInput(props) {
    const inputRef = useRef(null);

    const findProduct = () => {
        const string = inputRef.current.value;
        props.productSearch(string);
    };

    const clearFindProduct = () => {
        if(inputRef.current !== null){
            inputRef.current.value = null;
            props.clearProductFound()
        }
    };

    return(
        <div className={style.searchInput}>
            <p>
                <input
                    ref={inputRef}
                    placeholder={"Я ищу..."}
                    autoComplete={"off"}
                />
                <i className="far fa-times-circle" onClick={clearFindProduct}/>
            </p>
            <div className={style.button} onClick={findProduct}>
                Найти
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    productSearch: (string) => dispatch(productSearch(string)),
    clearProductFound: () => dispatch(clearProductFound())
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);