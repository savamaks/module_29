import OneDay from "../OneDay/OneDay";
import FiveDay from "../FiveDays/FiveDays";
import HandlerError from "../HandlerError/HandlerError";
import Loader from "../Loader/Loader";
import { IArrMain,  IDataOneDay } from "../type";
import { FC } from "react";
import separation from "../handlerFunc/separation";

interface IProps {
    data: IDataOneDay ;
    amountDays: string;
}

const Answer: FC<IProps> = ({ data, amountDays }) => {
    console.log(data);
    // если нет связи или произошла какаято ошибка
    if (data.error) return <HandlerError data={data} />;

    // если неправильно ввели данные запроса
    if (data.status !== 200) return <HandlerError data={data} />;

    //проверка какой запрос отправлен на 5 дней или на один
    if (amountDays === "weather" && !data.error ) {
        return <OneDay data={data} />;
    } else if (amountDays === "forecast" && !data.error) {
        //проверка есть ли нужные данные в массиве
        if (!data.list) return <Loader />;

        //запуск функции разделения массива на прогноз по дням
        const separationArr: Array<Array<IArrMain>> = separation(data);

        return <FiveDay data={data} separationArr={separationArr} />;
    } else {
        return <HandlerError data={data} />;
    }
};

export default Answer;
