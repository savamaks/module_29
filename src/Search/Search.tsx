import style from "./style.module.scss";
import geolocation from "../icons/geolocation.svg";
import search from "../icons/search.svg";
import { ChangeEvent, FC, useState, MouseEvent } from "react";

interface IProps {
    onSearch: (value: string) => void;
    initGeo: (a: number, b: number) => void;
}

const Search: FC<IProps> = ({ onSearch, initGeo }) => {
    const [valueInput, setValueInput] = useState("");
    const [errorGeo, setErrorGeo] = useState("");

    //введенные данные сохраняются в переменную
    const initInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValueInput(e.target.value);
    };
    //обработка клика на кнопку поиск по названию города
    const clickButtonSearch = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (valueInput === "") return;

        onSearch(valueInput);
        initGeo(0, 0);
        setValueInput("");
    };
    //обработка клика на кнопку поиска по геопозиции
    const clickButtonGeo = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    // Функция, срабатывающая при отказе от получении геолокации и удаляет тескт ошибки через 10 секунд
    const error = (): void => {
        setErrorGeo("Невозможно получить ваши координаты! В настройках браузера нужно разрешить сайту определять ваше местоположение.");
        setTimeout(() => {
            setErrorGeo("");
        }, 10000);
    };

   
    // Функция, срабатывающая при успешном получении геолокации
    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        initGeo(latitude, longitude);

        onSearch("");
    };

    return (
        <div className={style.block}>
            {errorGeo && (
                <div className={style.block__geo}>
                    <p>{errorGeo}</p>
                    <button
                        className={style.block__geo_button}
                        onClick={() => {
                            setErrorGeo("");
                        }}
                    >
                        {"\u00D7"}
                    </button>
                </div>
            )}
            <form className={style.block__form}>
                <input
                    value={valueInput}
                    onChange={initInput}
                    className={style.block__form_input}
                    type="text"
                    placeholder="Введите название населенного пункта..."
                />

                <button title="Поиск по названию города" className={style.block__form_button} onClick={clickButtonSearch}>
                    <img src={search} alt="" />
                </button>
                <button onClick={clickButtonGeo} title="определить координаты местоположения" className={style.block__form_button}>
                    <img src={geolocation} alt="" />
                </button>
            </form>
        </div>
    );
};
export default Search;
