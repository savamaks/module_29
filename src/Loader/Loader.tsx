import style from "./style.module.scss";

const Loader = (): JSX.Element => {
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
};
export default Loader;
