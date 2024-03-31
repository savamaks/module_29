import React, { FC } from "react";
import style from "./styly.module.scss";
import { IData, IDataOneDay } from "../type";

interface IProps {
    data: IData | IDataOneDay;
}
const HandlerError: FC<IProps> = ({ data }) => {
    if (data.error) {
        return <h2 className={style.title}>произошла ошибка, перезагрузите страницу</h2>;
    } else if (data.message === "city not found") {
        return <h2 className={style.title}>Город с таким названием не найден</h2>;
    } else {
        return (
            <>
                <div className={style.block}>
                    <p className={style.block__text}>Введите название города или нажмите кнопку определения местоположения.</p>
                </div>
            </>
        );
    }
};
export default HandlerError;
