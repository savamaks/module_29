import React from "react";
import style from "./styly.module.scss";

const HandlerError = ({ data }: any): JSX.Element => {
    if (data === "error") {
        return <h2 className={style.title}>произошла ошибка, перезагрузите страницу</h2>;
    } else if (data === undefined) {
        return (
            <>
            <div className={style.block}>
                <p className={style.block__text}>Введите название города или нажмите кнопку определения местоположения.</p>
            </div>
            
            </>
        );
    } else {
        return <h2 className={style.title}>Город с таким названием не найден</h2>;
    }
};
export default HandlerError;
