import style from "./style.module.scss";
import geolocation from "../icons/geolocation.svg";
import search from "../icons/search.svg";
import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";

const Search = ({ onSearch, initGeo }: any): JSX.Element => {
    const [valueInput, setValueInput] = useState("");

    const initInput = (e: BaseSyntheticEvent): void => {
        e.preventDefault();
        setValueInput(e.target.value);
    };
    const clickButtonSearch = (e: SyntheticEvent): void => {
        e.preventDefault();
        if (valueInput === "") return;
       
        onSearch(valueInput);
        initGeo(0, 0);
        setValueInput("");
    };
    const clickButtonGeo = (e: SyntheticEvent): void => {
        e.preventDefault();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    // Функция, срабатывающая при отказе от получении геолокации
    const error = (): void => {
        console.log("Невозможно получить ваше местоположение");
    };

    // Функция, срабатывающая при успешном получении геолокации
    const success = (position: GeolocationPosition): void => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        initGeo(latitude, longitude);
        
        onSearch("");
    };

    return (
        <div className={style.searchBlock}>
            <form className={style.searchBlock__form} onSubmit={clickButtonSearch}>
                <input
                    value={valueInput}
                    onChange={initInput}
                    className={style.searchBlock__form_input}
                    type="text"
                    placeholder="Введите название населенного пункта..."
                />

                <button title="Поиск по названию города" className={style.searchBlock__form_button} onClick={clickButtonSearch}>
                    <img src={search} alt="" />
                </button>
                <button onClick={clickButtonGeo} title="определить координаты местоположения" className={style.searchBlock__form_button}>
                    <img src={geolocation} alt="" />
                </button>
            </form>
        </div>
    );
};
export default Search;
