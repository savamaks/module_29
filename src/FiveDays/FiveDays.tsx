import React from "react";
import style from "./style.module.scss";
import NextDay from "../NextDays/NextDay";
import { useState } from "react";
import FullDay from "../FullDay/FullDay";
import Loader from "../Loader/Loader";

const FiveDay = ({ data, separationArr }: any): JSX.Element => {
    console.log("render five");

    const [arrFullDay, setArrFullDay] = useState(separationArr[0]);

    // проверка те ли данные пришли если нет то выскакивает лоадер
    if (!data.list) {
        return <Loader />;
    }

    // добавляет массив с данными о погоде на день который выбран
    const fullWeatherDay = (arr: any): void => {
        setArrFullDay(arr);
    };

    //время восхода и заката солнца
    let arrTime = [data.city.timezone, data.city.sunrise, data.city.sunset];

    return (
        <>
            <h2 className={style.weather__title}>{data.city.name}</h2>
            <div className={style.data}>
                <NextDay arr={separationArr[0]} onClick={fullWeatherDay} />
                <NextDay arr={separationArr[1]} onClick={fullWeatherDay} />
                <NextDay arr={separationArr[2]} onClick={fullWeatherDay} />
                <NextDay arr={separationArr[3]} onClick={fullWeatherDay} />
                <NextDay arr={separationArr[4]} onClick={fullWeatherDay} />
                {separationArr[5] && <NextDay arr={separationArr[5]} onClick={fullWeatherDay} />}
            </div>
            <FullDay arrTime={arrTime} arr={arrFullDay} />
        </>
    );
};
export default FiveDay;
