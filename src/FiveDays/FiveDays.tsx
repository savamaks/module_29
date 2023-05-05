import React from "react";
import style from "./style.module.scss";
import NextDay from "../NextDays/NextDay";
import { useState } from "react";
import FullDay from "../FullDay/FullDay";
import Loader from "../Loader/Loader";

const FiveDay = ({ data }: any): JSX.Element => {
    let arrOneDay: Array<object> = [];
    let arrTwoDay: Array<object> = [];
    let arrThreeDay: Array<object> = [];
    let arrFourDay: Array<object> = [];
    let arrFiveDay: Array<object> = [];
    let arrSixDay: Array<object> = [];
    const [arrFullDay, setArrFullDay] = useState(arrOneDay);
   
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

    // разбиение данных на дни 
    data.list.map((el: any): void => {
        let startDate = data.list[0].dt;

        let one = new Date(startDate * 1000).toLocaleDateString().slice(0, 2);
        let two = new Date((startDate + 86400) * 1000).toLocaleDateString().slice(0, 2);
        let three = new Date((startDate + 86400 * 2) * 1000).toLocaleDateString().slice(0, 2);
        let four = new Date((startDate + 86400 * 3) * 1000).toLocaleDateString().slice(0, 2);
        let five = new Date((startDate + 86400 * 4) * 1000).toLocaleDateString().slice(0, 2);
        let six = new Date((startDate + 86400 * 5) * 1000).toLocaleDateString().slice(0, 2);

        // условия разбиения данных на дни
        if (el.dt_txt.slice(8, 10) === one) {
            arrOneDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === two) {
            arrTwoDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === three) {
            arrThreeDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === four) {
            arrFourDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === five) {
            arrFiveDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === six) {
            arrSixDay.push(el);
        }
    });

    return (
        <>
            <h2 className={style.weather__title}>{data.city.name}</h2>
            <div className={style.data}>
                <NextDay arr={arrOneDay} onClick={fullWeatherDay} />
                <NextDay arr={arrTwoDay} onClick={fullWeatherDay} />
                <NextDay arr={arrThreeDay} onClick={fullWeatherDay} />
                <NextDay arr={arrFourDay} onClick={fullWeatherDay} />
                <NextDay arr={arrFiveDay} onClick={fullWeatherDay} />
                {arrSixDay[0] && <NextDay arr={arrSixDay} onClick={fullWeatherDay} />}
            </div>
            <FullDay arrTime={arrTime} arr={arrFullDay} />
        </>
    );
};
export default FiveDay;
