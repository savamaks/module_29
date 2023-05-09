import style from './toggle.module.scss'

const ToggleThems = (): JSX.Element => {

    const f=(e:any):void=>{
        console.log(e);
    }
    return (
        <label onChange={f} className={style.toggle}>
            <input  type="checkbox" name="toggle" />
            <span className={style.slider}></span>
        </label>
    );
};

export default ToggleThems;
