import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Todo(props) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/gettodo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setTodos(data);
      });
  }, []);

  function updateTask(item) {
    props.setTodoName(item.name);
    props.setTodoDes(item.description);
    props.setEditId(item.id);
    navigate("/task");
  }

  function deletedTask(id) {
    fetch("http://localhost:5000/deletetodo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setTodos(data);
      });
  }

  return (
    <div className='todosTaskListContainer'>
      <ul>
        {props.todos.map((item) => {
          return (
            <div className='taskItemContainer' key={item.id}>
              <li className='tasklistItem'>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <button onClick={() => updateTask(item)}>update</button>
                  <button>completed</button>
                  <button onClick={() => deletedTask(item.id)}>delete</button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
