import React, { FC } from "react";
import style from "./style.module.scss";
import NextDay from "../NextDays/NextDay";
import { useState } from "react";
import FullDay from "../FullDay/FullDay";
import Loader from "../Loader/Loader";
import { IArrMain, IData } from "../type";

interface IProps {
    data: IData;
    separationArr: Array<Array<IArrMain>>;
}

const FiveDay: FC<IProps> = ({ data, separationArr }) => {
    const [activeElement, setActiveElement] = useState(0);

    // проверка те ли данные пришли если нет то выскакивает лоадер
    if (!data.list) {
        return <Loader />;
    }

    //время восхода и заката солнца
    let arrTime = [data.city.timezone, data.city.sunrise, data.city.sunset];
    return (
        <>
            <h2 className={style.weather__title}>{data.city.name}</h2>
            <div className={style.data}>
                {separationArr.map((element: Array<IArrMain>, index: number): JSX.Element => {
                    return (
                        <NextDay
                            key={index}
                            index={index}
                            active={activeElement === index ? true : false}
                            arr={element}
                            setActiveElement={setActiveElement}
                        />
                    );
                })}
            </div>
            <FullDay arrTime={arrTime} arr={separationArr} activeElement={activeElement} />
        </>
    );
};
export default FiveDay;
