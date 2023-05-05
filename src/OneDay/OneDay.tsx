import React from "react";
import style from "./style.module.scss";
import sunrise from "../icons/icons8-восход-48.png";
import sunset from "../icons/icons8-закат-солнца-48.png";
import wind from "../icons/free-icon-wind-7682452.png";
import humidity from "../icons/free-icon-drop-6566228.png";
import arrow from "../icons/стрелка.png";
import Loader from "../Loader/Loader";

const OneDay=({ data }: any): JSX.Element =>{
    // проверка те ли данные пришли если нет то выскакивает лоадер
    if (!data.name) {
        return <Loader/>
    }
    let imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let temp = Math.round(data.main.temp);
    let temFeelsLike = Math.round(data.main.feels_like);
    let pressure = Math.trunc((data.main.pressure / 133.3) * 100);
    return (
        <>
            <h2 className={style.weather__title}>{data.name}</h2>
            <div key={data.dt} className={style.weather}>
                <div className={style.weather__box_block}>
                    <img title={data.weather[0].description} className={style.weather__box_image} src={imgUrl} alt="" />
                    <p className={style.weather__text}>{data.weather[0].description}</p>
                </div>
                <div className={style.weather__box_block}>
                    <p title="Температура" className={style.weather__box_temp}>
                        {temp} °C
                    </p>
                    <p className={style.weather__text} title="Температура восприятия">
                        Ощущается как {temFeelsLike} °C
                    </p>
                </div>
                <div className={style.weather__box_block}>
                    <p className={style.weather__text}>Влажность воздуха {data.main.humidity}%</p>
                    <p className={style.weather__text}>Давление {pressure} мм.рт.ст.</p>
                </div>
                <div className={style.weather__box_block}>
                    <p className={style.weather__text}>Скорость ветра {data.wind.speed} м/с</p>
                    {data.wind.gust && <p className={style.weather__text}>Порывы ветра {data.wind.gust}м/с</p>}
                </div>
                <div title="направление ветра" className={style.weather__compass}>
                    <img style={{ transform: ` rotate(${data.wind.deg}deg)` }} className={style.weather__compass_arrow} src={arrow} alt="" />
                </div>
                <div className={style.weather__box}>
                    <div title="Время восхода ">
                        <p>{new Date(data.sys.sunrise * 1000 + data.timezone).toLocaleTimeString().slice(0, 5)}</p>
                        <img src={sunrise} alt="" />
                    </div>
                    <div title="Время заката ">
                        <p>{new Date(data.sys.sunset * 1000 + data.timezone).toLocaleTimeString().slice(0, 5)}</p>
                        <img src={sunset} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default OneDay