import style from "./style.module.scss";
import arrow from "../icons/стрелка.png";
import sunset from "../icons/icons8-закат-солнца-48.png";
import sunrise from "../icons/icons8-восход-48.png";

const timeCorrect = (time: string): string => {
    return time.split("-").join(" ").split(" ").join(" ").slice(11, 16);
};

const FullDay = ({ arrTime, arr }: any): JSX.Element => {
    console.log(arr);
    const e = arr.map((el: any): JSX.Element => {
        let time = timeCorrect(el.dt_txt);
        let temp = Math.round(el.main.temp);
        let temFeelsLike = Math.round(el.main.feels_like);
        let imgUrl = `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
        let pressure = Math.trunc((el.main.pressure / 133.3) * 100);
        return (
            <div key={el.dt} className={style.weather__box}>
                <h2 className={style.weather__box_time}>{time}</h2>
                <div className={style.weather__box_block}>
                    <img className={style.weather__box_image} src={imgUrl} alt="" />
                    <p className={style.weather__text}>{el.weather[0].description}</p>
                </div>
                <div className={style.weather__box_block}>
                    <p title="Температура" className={style.weather__box_temp}>
                        {temp} °C
                    </p>
                    <p title="Температура восприятия" className={style.weather__text}>
                        Ощущается как {temFeelsLike} °C
                    </p>
                </div>
                <div className={style.weather__box_block}>
                    <p className={style.weather__text}>Влажность воздуха {el.main.humidity}%</p>
                    <p className={style.weather__text}>Давление {pressure} мм.рт.ст.</p>
                </div>
                <div className={style.weather__box_block}>
                    <p className={style.weather__text}>Скорость ветра {el.wind.speed} м/с</p>
                    {el.wind.gust && <p className={style.weather__text}>Порывы ветра {el.wind.gust} м/с</p>}
                </div>
                <div title="направление ветра" className={style.weather__compass}>
                    <img style={{ transform: ` rotate(${el.wind.deg}deg)` }} className={style.weather__compass_arrow} src={arrow} alt="" />
                </div>
                <div className={style.weather__box}>
                    <div title="Время восхода ">
                        <p>{new Date(arrTime[1] * 1000 + arrTime[0]).toLocaleTimeString().slice(0, 5)}</p>
                        <img src={sunrise} alt="" />
                    </div>
                    <div title="Время заката ">
                        <p>{new Date(arrTime[2] * 1000 + arrTime[0]).toLocaleTimeString().slice(0, 5)}</p>
                        <img src={sunset} alt="" />
                    </div>
                </div>
            </div>
        );
    });
    return <div className={style.weather}>{e}</div>;
};
export default FullDay;
