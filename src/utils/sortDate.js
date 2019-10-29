import moment from "moment";

const format = "YYYY DD MM";

export const sortArrayDate = (dateNow, dateThen) => {

    return  moment(dateThen, format) - moment(dateNow, format)
};

export const sortObjectDate = (objectNow, objectThen) => {
    const dateNow = objectNow.date;
    const dateThen = objectThen.date;

    return  moment(dateThen) - moment(dateNow)
};