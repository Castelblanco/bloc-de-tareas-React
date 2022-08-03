import { Fragment } from "react";
import "./tasks.css";

// Img
import Check from "./check.svg";
import X from "./x.svg";

export default function Tasks(props){

    const { setTasks, tasks, filter } = props;

    function checkTask(id){
        let newTasks = tasks.filter(i =>{
            if (i.id === id) i.status = true;
            return i;
        });
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    function deleteTask(id){
        const newData = tasks.filter(i => i.id !== id);
        setTasks(newData);
        localStorage.setItem("tasks", JSON.stringify(newData));
    }

    return(
        <Fragment>
            {tasks !== null ? tasks.map(i =>{
                let bg = i.status ? "#06f" : "#f13d";

                if (i.status === filter){
                    return(
                        <div style={{background: bg}} className="task" key={i.id}>
                            <h2>{ i.name }</h2>
                            <div className="desc">
                                <p>{ i.desc }</p>
                                <div className="btns">
                                    <button onClick={()=>checkTask(i.id)} className="check">
                                        <img src={Check} alt="Check"/>
                                    </button>
                                    <button onClick={()=> deleteTask(i.id)} className="x">
                                        <img src={X} alt="X"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );

                }else if (filter === undefined){
                    return(
                        <div style={{background: bg}} className="task" key={i.id}>
                            <h2>{ i.name }</h2>
                            <div className="desc">
                                <p>{ i.desc }</p>
                                <div className="btns">
                                    <button onClick={()=>checkTask(i.id)} className="check">
                                        <img src={Check} alt="Check"/>
                                    </button>
                                    <button onClick={()=> deleteTask(i.id)} className="x">
                                        <img src={X} alt="X"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
            })
            : ""}
        </Fragment>
    );
}