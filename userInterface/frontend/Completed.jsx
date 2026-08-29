
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
      if(item.isCompleted === "yes"){
             return <li key={item.id}>{item.name}</li>;
      }
        
    })}
    </div>
  )
}

export default Completed
