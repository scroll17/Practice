import React from "react";
import style from './Header.module.sass'

import connect from "react-redux/es/connect/connect";

import SearchInput from "./SearchInput/SearchInput";

import { Link } from "react-router-dom";

import { URL, LOGO_SRC } from "../../constants";

import { size, isEmpty } from 'lodash'

function Header(props) {

    return(
        <header>
            <div className={style.header}>
                <Link to={URL.HOME}>
                    <img src={LOGO_SRC} alt={''}/>
                </Link>
                <SearchInput />
                <Link to={URL.BASKET} className={style.basket}>
                    {isEmpty(props.basket) ?
                        null
                        :
                        <span>{size(props.basket)}</span>
                    }
                    <i className="fas fa-store" />
                </Link>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => ({
    basket: state.mainReducer.basket,
});
export default connect(mapStateToProps)(Header);
