import { Fragment, useState } from 'react';
import './App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

// Components
import Tasks from './components/tasks/tasks';
import CreateTasks from './components/header/createTasks';

function App() {

  const [tasks, setTasks] = useState(()=>{
    const data = JSON.parse(localStorage.getItem("tasks"));
    return data === null ? [] : data;
  }),
        location = useLocation().pathname;

  return (
    <Fragment>
      <header>
        <h2>Block de Tareas</h2>
        <nav>
          <ul>
            <li><Link className={location === "/" ? "active" : ""} to="/">Todas las Tareas</Link></li>
            <li><Link className={location === "/tasks-checks" ? "active" : ""} to="/tasks-checks">Tareas Completadas</Link></li>
            <li><Link className={location === "/tasks-not-checks" ? "active" : ""} to="/tasks-not-checks">Tareas Incompletas</Link></li>
          </ul>
        </nav>
        <hr/>
        <div>
          <CreateTasks data={tasks} change={setTasks}/>
        </div>
      </header>
      <hr/>
      <Routes className='tasks'>
        <Route
        path='/'
        element={<Tasks tasks={tasks} setTasks={setTasks}/>}
        />
        <Route
        path='/tasks-checks'
        element={<Tasks filter={true} tasks={tasks} setTasks={setTasks}/>}
        />
        <Route
        path='/tasks-not-checks'
        element={<Tasks filter={false} tasks={tasks} setTasks={setTasks}/>}
        />
      </Routes>
      <footer>Esteban Javier Castelblanco García</footer>
    </Fragment>
  );
}

export default App;
