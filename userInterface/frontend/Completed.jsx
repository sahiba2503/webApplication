
import { useEffect } from "react";
function Completed(props) {
   useEffect(() => {
      fetch("http://localhost:5000/gettodo")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          props.setTodos(data);
        });
    }, []);
  return (
    <div>
    {props.todos.map((item)=>{
      return<li>{item}</li>
    })}
    </div>
  )
}

export default Completed
