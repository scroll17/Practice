import { URL } from "./url";
import config from '../boot/config';

const STORE = config();

const LOGO_SRC = "https://static.rozetka.com.ua/assets/img/design/logo_n.svg";

const TYPE_BUTTON = {
    BUY: 'buy',
    DELETE: 'delete'
};

export {
    STORE,
    URL,

    LOGO_SRC,

    TYPE_BUTTON
}