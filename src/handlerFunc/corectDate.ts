// массив для замены числа месяца на название
const arrMounth: Array<string> = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];

//корректировка даты и замена на название месяца
export const dateCorrect = (date: string): string => {
    let count: string | number = "";
    let newDate = date.slice(5, 10).split("-").join(" ").split(" ");

    for (let index = 0; index < arrMounth.length + 1; index++) {
        if (index <= 9) {
            count = "0" + index;
        } else {
            count = index;
        }
        if (+newDate[0] === +count) {
            newDate[0] = arrMounth[index - 1];
        }
    }
    return newDate.reverse().join(" ");
};
