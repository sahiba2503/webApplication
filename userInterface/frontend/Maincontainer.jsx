import Task from "./Task";
import Todo from "./Todo";
import Completed from "./Completed";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function Maincontainer() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDes, setTodoDes] = useState("");

  const [editId, setEditId] = useState(null);
  return (
    <div className='mainContainer'>
      <Routes>
        <Route
          path='/task'
          element={
            <Task
              setTodos={setTodos}
              setTodoName={setTodoName}
              setTodoDes={setTodoDes}
              todos={todos}
              todoName={todoName}
              todoDes={todoDes}
              editId={editId}
              setEditId={setEditId}
            />
          }
        ></Route>
        <Route index element={<Navigate to='/task' />}></Route>
        <Route
          path='/todo'
          element={
            <Todo
              setTodos={setTodos}
              todos={todos}
              setTodoName={setTodoName}
              setTodoDes={setTodoDes}
              setEditId={setEditId}
            />
          }
        ></Route>
        <Route path='/completed' element={<Completed  setTodos={setTodos}
              todos={todos} />}></Route>
        <Route path='/*' element={<Navigate to='/task' />}></Route>
      </Routes>
    </div>
  );
}

export default Maincontainer;
