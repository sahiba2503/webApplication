import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Task(props) {
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/gettodo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setTodos(data);
      });
  }, []);

  function taskSubmit(e) {
    e.preventDefault();
    if (props.todoName.trim() === "" || props.todoDes.trim() === "") {
      return;
    }
    if (props.editId !== null) {
      fetch("http://localhost:5000/updatetodo", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: props.editId,
          name: props.todoName,
          description: props.todoDes,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          props.setTodos(data);

          props.setTodoName("");
          props.setTodoDes("");
          props.setEditId(null);

          navigate("/todo");
        });
    } else {
      fetch("http://localhost:5000/posttodo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: props.todoName,
          description: props.todoDes,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          props.setTodos(data);
          props.setTodoName("");
          props.setTodoDes("");
          navigate("/todo");
        });
    }
  }

  return (
    <div className='taskCreateContainer'>
      <form onSubmit={taskSubmit}>
        <input
          type='text'
          placeholder='Enter a task name'
          value={props.todoName}
          onChange={(e) => props.setTodoName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter a task description'
          value={props.todoDes}
          onChange={(e) => props.setTodoDes(e.target.value)}
        />
        <button type='submit'>
          {props.editId !== null ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default Task;
