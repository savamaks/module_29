import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function ButtonDays({ onSelect }: any): JSX.Element {
    const [flag, setFlag] = useState("");

    const week = (e: any): void => {
        e.preventDefault();
        onSelect("forecast");
        e.target.parentElement.querySelectorAll(`.${style.active}`).forEach((element: HTMLElement): void => {
            element.classList.remove(`${style.active}`);
        });
        e.target.classList.add(`${style.active}`);
    };

    const today = (e: any): void => {
        e.preventDefault();
        onSelect("weather");
        e.target.parentElement.querySelectorAll(`.${style.active}`).forEach((element: HTMLElement): void => {
            element.classList.remove(`${style.active}`);
        });
        e.target.classList.add(`${style.active}`);
    };

    useEffect(():void => {
        document.querySelector(`.${style.box__button}`)?.classList.add(`${style.active}`);

    }, [flag]);

    return (
        <div className={style.box}>
            <button className={style.box__button} onClick={today}>
                сегодня
            </button>
            <button className={style.box__button} onClick={week}>
                на 5 дней
            </button>
        </div>
    );
}
