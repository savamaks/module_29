import { MouseEvent, FC } from "react";
import style from "./style.module.scss";
import cn from "classnames";

interface IProps {
    setAmountDays: (value: string) => void;
    amountDays: string;
}

const ButtonDays: FC<IProps> = ({ setAmountDays, amountDays }) => {
    const week = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAmountDays("forecast");
    };

    const today = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAmountDays("weather");
    };


    return (
        <div className={style.box}>
            <button className={cn(style.box__button, amountDays === "weather" && style.active)} onClick={today}>
                сегодня
            </button>
            <button className={cn(style.box__button, amountDays === "forecast" && style.active)} onClick={week}>
                на 5 дней
            </button>
        </div>
    );
};
export default ButtonDays;
