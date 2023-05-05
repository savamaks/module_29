import React, { useEffect, useState } from "react";
import "./style/normolize.scss";
import "./style/variables.scss";
import style from "./style/App.module.scss";
import Search from "./Search/Search";
import RequestAPI from "./RequestAPI/RequestAPI";
import ButtonDays from "./ButtonDays/ButtonDays";
import OneDay from "./OneDay/OneDay";
import FiveDay from "./FiveDays/FiveDays";
import Error from "./Error/Error";

const App = (): JSX.Element => {
    const [search, setSearch] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [amountDays, setAmountDays] = useState("weather");
    const [data, setData]: any = useState("");

    // при ответе запускается компонент и проверяет какие данные пришли
    const Answer = (): JSX.Element => {
        // если нет связи или произошла какаято ошибка
        if (data === "error") return <Error data={data} />;

        // если неправильно ввели данные запроса
        if (data.message) return <Error data={data} />;

        //проверка какой запрос отправлен на 5 дней или на один
        if (amountDays === "weather" && data !== "") {
            return <OneDay data={data} />;
        } else if (amountDays === "forecast" && data !== "") {
            return <FiveDay data={data} />;
        } else {
            return <Error />;
        }
    };

    //значение кнопки погоды на 5 дней или один
    const selectAmountDays = (value: string): void => {
        setAmountDays(value);
    };

    //значение поисковой строки
    const initSearch = (value: any): void => {
        setSearch(value);
    };

    //значение геопозиции
    const initGeo = (latitude: number, longitude: number): void => {
        setLatitude(latitude);
        setLongitude(longitude);
    };

    //значение полученых данных с сервера
    const changeData = (value: object): void => {
        setData(value);
    };

    // запуск запроса к серверу
    RequestAPI({ changeData, latitude, longitude, search, amountDays });

    return (
        <div className={style.app}>
            <div className={style.widget}>
                <div className={style.box}>
                    <Search onSearch={initSearch} initGeo={initGeo} />
                    <ButtonDays onSelect={selectAmountDays} />
                </div>
                <Answer />
            </div>
        </div>
    );
};

export default App;
