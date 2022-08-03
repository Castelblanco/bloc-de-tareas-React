import { Fragment, useState } from "react";
import "./createTasks.css";

export default function CreateTasks(props) {

    const {change: setTasks, data: tasks} = props;

    const [subValue, setChange] = useState({name: "", desc: ""});

    function registerTask(e){
        e.preventDefault();
        subValue.id = Date.now();
        subValue.status = false;
        tasks.push(subValue);
        setTasks(tasks.map(i => i));
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setChange({...subValue, name: "", desc: ""});
    }

    function inputChange(e) {
        setChange({...subValue, [e.target.name]: e.target.value });
    }

    return(
        <Fragment>
            <form className="form">
                <h2>Crea una Tarea</h2>
                <input name="name" value={subValue.name} onChange={inputChange} type="text" placeholder="Nombre"/>
                <textarea name="desc" value={subValue.desc} onChange={inputChange} placeholder="Descripción"></textarea>
                <button onClick={registerTask}>Crear</button>
            </form>
        </Fragment>
    );
}