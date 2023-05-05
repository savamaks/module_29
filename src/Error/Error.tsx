import React from "react";
import style from "./styly.module.scss";

const Error = ({ data }: any): JSX.Element => {
    if (data === "error") {
        return <h2 className={style.title}>произошла ошибка, перезагрузите страницу</h2>;
    } else {
        return <h2 className={style.title}>Город с таким названием не найден</h2>;
    }
};
export default Error;
