console.log("render request");

// запрос на сервер
async function requestAPI(keyAPI: string, latitude: number, longitude: number, search: string, amountDays: string, changeData: any): Promise<void> {
    console.log(latitude,longitude);
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/${amountDays}?q=${search !== "" ? search : ""}&units=metric&lat=${
                search === "" ? latitude : ""
            }&lon=${search === "" ? longitude : ""}&appid=${keyAPI}&lang=ru`
        );
        const data = await response.json();
        changeData(data);
        //данные уходят в компонент app
    } catch {
        //данные уходят в компонент app
        changeData("error");
        console.log("error");
    }
    
}

export default requestAPI;
