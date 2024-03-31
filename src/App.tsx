import React, { FC, useEffect, useState } from "react";
import "./style/normolize.scss";
import style from "./style/App.module.scss";
import Search from "./Search/Search";
import requestAPI from "./RequestAPI/RequestAPI";
import ButtonDays from "./ButtonDays/ButtonDays";
import Answer from "./Answer/Answer";
import { IData } from "./type";

const App: FC = () => {
    const keyAPI = "09b3578ac605cfd2dc02f9694aa1782d";
    const [search, setSearch] = useState<string>("");
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [amountDays, setAmountDays] = useState<string>("weather");
    const [data, setData]: Array<IData | any> = useState({});

    //значение поисковой строки
    const initSearch = (value: string) => {
        setSearch(value);
    };

    //значение геопозиции
    const initGeo = (latitude: number, longitude: number) => {
        setLatitude(latitude);
        setLongitude(longitude);
    };

    // запуск запроса к серверу

    const request = async () => {
        const result = await requestAPI(keyAPI, latitude, longitude, search, amountDays, setData);
        setData(result);
    };
    useEffect(() => {
        if ((latitude !== 0 && longitude !== 0) || search !== "") {
            request();
        }
    }, [latitude, longitude, search, amountDays]);

    return (
        <div className={style.app}>
            <div className={style.widget}>
                <div className={style.box}>
                    <Search onSearch={initSearch} initGeo={initGeo} />
                    <ButtonDays setAmountDays={setAmountDays} amountDays={amountDays} />
                </div>
                <Answer data={data} amountDays={amountDays} />
            </div>
        </div>
    );
};

export default App;
