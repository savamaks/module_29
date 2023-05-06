import React, { useEffect, useState } from "react";
import "./style/normolize.scss";
import "./style/variables.scss";
import style from "./style/App.module.scss";
import Search from "./Search/Search";
import requestAPI from "./RequestAPI/requestAPI";
import ButtonDays from "./ButtonDays/ButtonDays";
import Answer from "./Answer/Answer";

const App = (): JSX.Element => {
    console.log("render app");
    const keyAPI = "09b3578ac605cfd2dc02f9694aa1782d";
    const [search, setSearch] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [amountDays, setAmountDays] = useState("weather");
    const [data, setData]: any = useState("");

    //значение поисковой строки
    const initSearch = (value: string): void => {
        setSearch(value);
    };

    //значение геопозиции
    const initGeo = (latitude: number, longitude: number): void => {
        console.log("but");
        setLatitude(latitude);
        setLongitude(longitude);
    };

    //значение полученых данных с сервера
    const changeData = (value: object): void => {
        setData(value);
    };
    //значение кнопки погоды на 5 дней или один
    const selectAmountDays = (value: string): void => {
        setAmountDays(value);
    };

    // запуск запроса к серверу

    useEffect((): void => {
        requestAPI(keyAPI, latitude, longitude, search, amountDays, changeData);
    }, [latitude, longitude, search, amountDays]);

    return (
        <div className={style.app}>
            <div className={style.widget}>
                <div className={style.box}>
                    <Search onSearch={initSearch} initGeo={initGeo} />
                    <ButtonDays onSelect={selectAmountDays} />
                </div>
                <Answer data={data} amountDays={amountDays} />
            </div>
        </div>
    );
};

export default App;
