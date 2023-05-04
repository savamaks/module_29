import { useEffect, useState } from "react";

export default function RequestAPI({ latitude, longitude, search, amountDays, changeData }: any): JSX.Element {
    // console.log("render request");

    const keyAPI = "09b3578ac605cfd2dc02f9694aa1782d";

    async function request(): Promise<void> {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/${amountDays}?q=${search !== "" ? search : ""}&units=metric&lat=${
                    search === "" ? latitude : ""
                }&lon=${search === "" ? longitude : ""}&appid=${keyAPI}&lang=ru`
            );
            const data = await response.json();
            // console.log(data);
            changeData(data);
        } catch {
            console.log("error");
        }
    }

    useEffect((): void => {
        request();
    }, [latitude, longitude, amountDays, search]);
    // console.log(latitude, longitude, search, amountDays);

    return <></>;
}
