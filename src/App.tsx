import React, { useState } from "react";
import "./style/normolize.scss";
import "./style/variables.scss";
import style from "./style/App.module.scss";
import Search from "./Search/Search";
import { RequestAPI } from "./RequestAPI/RequestAPI";
import ButtonDays from "./ButtonDays/ButtonDays";
import OneDay from "./OneDay/OneDay";
import FiveDay from "./FiveDays/FiveDays";
import Error from "./Error/Error";

function App(): JSX.Element {
    const [search, setSearch] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [amountDays, setAmountDays] = useState("weather");
    const [data, setData]: any = useState("");

    function Answer(): JSX.Element {
        if (data === "error") return <Error data={data} />;

        if (data.message) return <Error data={data} />;

        if (amountDays === "weather" && data !== "") {
            return <OneDay data={data} />;
        } else if (amountDays === "forecast" && data !== "") {
            return <FiveDay data={data} />;
        } else {
            return <div>Введите название города или на жмите кнопку определение местоположения</div>;
        }
    }

    const selectAmountDays = (value: string): void => {
        setAmountDays(value);
    };

    const initSearch = (value: any): void => {
        setSearch(value);
    };

    const initGeo = (latitude: number, longitude: number): void => {
        setLatitude(latitude);
        setLongitude(longitude);
    };

    const changeData = (value: object): void => {
        setData(value);
    };
    
    RequestAPI({ changeData, latitude, longitude, search, amountDays });

    return (
        <div className={style.app}>
            <div className={style.widget}>
                <div  className={style.box}>
                    <Search onSearch={initSearch} initGeo={initGeo} />
                    <ButtonDays onSelect={selectAmountDays} />
                </div>
                <Answer />
            </div>
        </div>
    );
}

export default App;
