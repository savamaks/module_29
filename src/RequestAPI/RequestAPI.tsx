import { useEffect } from "react";

const RequestAPI = ({ latitude, longitude, search, amountDays, changeData }: any): void => {
    // console.log("render request");

    const keyAPI = "09b3578ac605cfd2dc02f9694aa1782d";
    // запрос на сервер
    async function request(): Promise<void> {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/${amountDays}?q=${search !== "" ? search : ""}&units=metric&lat=${
                    search === "" ? latitude : ""
                }&lon=${search === "" ? longitude : ""}&appid=${keyAPI}&lang=ru`
            );
            const data = await response.json();

            //данные уходят в компонент app
            changeData(data);
        } catch {
            
            //данные уходят в компонент app
            changeData("error");
            console.log("error");
        }
    }

    //если данные запроса не меняются то и функция не вызывается заново
    useEffect((): void => {
        request();
    }, [latitude, longitude, amountDays, search]);
};
export default RequestAPI;
