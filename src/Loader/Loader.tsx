import style from './style.module.scss'

export default function Loader():JSX.Element {
    return (
        <div className={style.box}>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
            <div className={style.box__animate}></div>
        </div>
    );
}
