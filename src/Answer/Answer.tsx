import OneDay from "../OneDay/OneDay";
import FiveDay from "../FiveDays/FiveDays";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import separation from "../separation/separation";


const Answer = ({data,amountDays}:any): JSX.Element => {
    // если нет связи или произошла какаято ошибка
    if (data === "error") return <Error data={data} />;

    // если неправильно ввели данные запроса
    if (data.message) return <Error data={data} />;

    //проверка какой запрос отправлен на 5 дней или на один
    if (amountDays === "weather" && data !== "") {
    
        return <OneDay data={data} />;
        
    } else if (amountDays === "forecast" && data !== "") {
        
        //проверка есть ли нужные данные в массиве
        if (!data.list) return <Loader />;

        //запуск функции разделения массива на прогноз по дням
        let separationArr = separation(data);

        return <FiveDay data={data} separationArr={separationArr} />;
    } else {
        return <Error />;
    }
};

export default Answer