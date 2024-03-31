import { IData } from "../type";

// запрос на сервер
async function requestAPI(
    keyAPI: string,
    latitude: number,
    longitude: number,
    search: string,
    amountDays: string,
    setData: (value: IData | object) => void
) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/${amountDays}?q=${search !== "" ? search : ""}&units=metric&lat=${
                search === "" ? latitude : ""
            }&lon=${search === "" ? longitude : ""}&appid=${keyAPI}&lang=ru`
        );
        const data = await response.json();
        if (response.status === 200) {
            return { ...data, status: response.status, error: false };
            // setData({ ...data, status: response.status });
        } else {
            return { ...data, status: response.status, error: false };

            // setData({ error: true, status: response.status });
        }
        //данные уходят в компонент app
    } catch (e) {
        //данные уходят в компонент app
        return { error: true };
        // setData({ error: true });
    }
}

export default requestAPI;
