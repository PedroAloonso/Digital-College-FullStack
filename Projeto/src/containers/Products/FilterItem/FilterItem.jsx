import style from "./filterItem.module.css"

export default function FilterItem({title, name, type}) {
    return (
        <div className={style.container}>
            <input type={type} name={name} />
            <label htmlFor="">{title}</label>
        </div>
    );
}


