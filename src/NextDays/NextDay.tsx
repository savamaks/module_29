import { SyntheticEvent, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import "./style.module.scss";

const arrMounth: Array<string> = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];

const dateCorrect = (date: string): string => {
    let count: string | number = "";
    let newDate = date.slice(5, 10).split("-").join(" ").split(" ");

    for (let index = 0; index < arrMounth.length + 1; index++) {
        if (index <= 9) {
            count = "0" + index;
        } else {
            count = index;
        }
        if (+newDate[0] === +count) {
            newDate[0] = arrMounth[index - 1];
        }
    }
    return newDate.reverse().join(" ");
};

export default function NextDay({ arr, onClick }: any): JSX.Element {
    let dateWeather;
    dateWeather = dateCorrect(arr[0].dt_txt);
    let imgUrl = `https://openweathermap.org/img/wn/${arr[0].weather[0].icon}@2x.png`;
    let temp = Math.round(arr[0].main.temp);
    const [flag, setFlag] = useState("");

    const fullWeatherDay = (e :any): void => {
        onClick(arr);
        e.preventDefault();
        e.target.parentElement.querySelectorAll(`.${style.active}`).forEach((element: HTMLElement): void => {
            element.classList.remove(`${style.active}`);
        });
        e.target.classList.add(`${style.active}`);
        
    };

    useEffect(():void  => {
        document.querySelector(`.${style.weather}`)?.classList.add(`${style.active}`);
    }, [flag]);

    return (
        <div className={style.weather} onMouseEnter={fullWeatherDay}>
            <h1 className={style.weather__title}>{dateWeather}</h1>
            <div className={style.weather__box}>
                <div className={style.weather__box_block}>
                    <p title="Температура" className={style.weather__box_temp}>
                        {temp} °C
                    </p>
                    <img title={arr[0].weather[0].description} className={style.weather__box_image} src={imgUrl} alt="" />
                </div>

                <p className={style.weather__description}>{arr[0].weather[0].description}</p>
            </div>
        </div>
    );
}
