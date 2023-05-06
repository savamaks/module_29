const separation = (data: any): object => {
    console.log('render separator');

    let arrOneDay: Array<object> = [];
    let arrTwoDay: Array<object> = [];
    let arrThreeDay: Array<object> = [];
    let arrFourDay: Array<object> = [];
    let arrFiveDay: Array<object> = [];
    let arrSixDay: Array<object> = [];

    // разбиение данных на прогноз по дням
    data.list.map((el: any): void => {
        let startDate = data.list[0].dt;
        let one = new Date(startDate * 1000).toLocaleDateString().slice(0, 2);
        let two = new Date((startDate + 86400) * 1000).toLocaleDateString().slice(0, 2);
        let three = new Date((startDate + 86400 * 2) * 1000).toLocaleDateString().slice(0, 2);
        let four = new Date((startDate + 86400 * 3) * 1000).toLocaleDateString().slice(0, 2);
        let five = new Date((startDate + 86400 * 4) * 1000).toLocaleDateString().slice(0, 2);
        let six = new Date((startDate + 86400 * 5) * 1000).toLocaleDateString().slice(0, 2);

        // условия разбиения данных на дни
        if (el.dt_txt.slice(8, 10) === one) {
            arrOneDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === two) {
            arrTwoDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === three) {
            arrThreeDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === four) {
            arrFourDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === five) {
            arrFiveDay.push(el);
        } else if (el.dt_txt.slice(8, 10) === six) {
            arrSixDay.push(el);
        }
    });

    return [arrOneDay, arrTwoDay, arrThreeDay, arrFourDay, arrFiveDay, arrSixDay];
};
export default separation