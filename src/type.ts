interface Weather {
    icon: string;
    description: string;
}
export interface IArrMain {
    dt_txt: string;
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<Weather>;
    wind: {
        speed: number;
        gust: number;
        deg: number;
    };
}

export interface IData {
    list: Array<IArrMain>;
    city: {
        timezone: number;
        sunrise: number;
        sunset: number;
        name: number;
    };
    message: string;
    error: boolean;
    status: number;
}

export interface IDataOneDay  extends IData{
    name: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    sys: {
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    dt: number;
    weather: Array<Weather>;
    error: boolean;
    status: number;
    message: string;

}
