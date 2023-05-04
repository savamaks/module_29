import React, { useState } from "react";
import "./style/normolize.scss";
import "./style/variables.scss";
import "./style/App.scss";
import Search from "./Search/Search";
import RequestAPI from "./RequestAPI/RequestAPI";
import ButtonDays from "./ButtonDays/ButtonDays";
import OneDay from "./OneDay/OneDay";
import FiveDay from "./FiveDays/FiveDays";

function App() {
    const [search, setSearch] = useState("");
    const [latitude, setLatitude] = useState(55.7522);
    const [longitude, setLongitude] = useState(37.6156);
    const [amountDays, setAmountDays] = useState("weather");
    const [data, setData]: any = useState('');

    console.log("render App");

    const selectAmountDays = (value: string): void => {
        console.log(value);
        setAmountDays(value);
    };

    const initSearch = (value: any): void => {
        setSearch(value);
        console.log(value);
    };

    const initGeo = (latitude: number, longitude: number): void => {
        console.log(latitude, longitude);
        setLatitude(latitude);
        setLongitude(longitude);
    };
   
    const changeData = (value: object): void => {
        setData(value);
    };
    function Div(): JSX.Element {
        if (amountDays === "weather" && data !=='') {
            return <OneDay data={data} />;
        } else {
            return <FiveDay data={data} />;
        }
    }
    return (
        <div className="app">
            <div className="widget">
                <Search onSearch={initSearch} initGeo={initGeo} />
                <ButtonDays onSelect={selectAmountDays} />
                <RequestAPI changeData={changeData} latitude={latitude} longitude={longitude} search={search} amountDays={amountDays} />
                
                    <Div />
            </div>
        </div>
    );
}

export default App;
