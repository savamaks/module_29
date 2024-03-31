import { FC } from "react";
import style from "./style.module.scss";
import cn from "classnames";
import { IArrMain } from "../type";
import { dateCorrect } from "../handlerFunc/corectDate";

interface IProps {
    arr: Array<IArrMain>;
    setActiveElement: (index: number) => void;
    active: boolean;
    index: number;
}

const NextDay: FC<IProps> = ({ arr, setActiveElement, active, index }) => {
    let dateWeather: string;
    dateWeather = dateCorrect(arr[0].dt_txt);
    let imgUrl = `https://openweathermap.org/img/wn/${arr[0].weather[0].icon}@2x.png`;

    //расчет максимальной температуры за день
    let maxTemp = arr[0].main.temp;
    arr.map((el: IArrMain) => {
        if (maxTemp < el.main.temp) {
            maxTemp = el.main.temp;
        }
    });

    let temp = Math.round(maxTemp);

    // при клике на элемент, внизу разворачивается погода на этот день по времени
    const fullWeatherDay = (e: any): void => {
        setActiveElement(index);
        e.preventDefault();
    };

    return (
        <div key={arr[0].dt_txt} className={cn(style.weather, active && style.active)} onClick={fullWeatherDay}>
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
};
export default NextDay;
