import { useEffect,useState } from "react";


function Todo() {
   const[tasks,setTasks] = useState([]);

    useEffect(()=>{
     fetch("http://localhost:5000/gettodo")
     .then((response)=>{
      return response.json();
     })
     .then((data)=>{
      setTasks(data);
     })
    },[]);
    function deletedTask(id){
    fetch("http://localhost:5000/deletetodo",{
      method:"DElETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({key:id})
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setTasks(data);
    })
    }
    
  return (
    <div className="todosTaskListContainer">
       <ul>{tasks.map((item)=>{
        return <div className="taskItemContainer" key={item.id}>
          <li className="tasklistItem">
            <div>
             <h3>{item.name}</h3>
             <p>{item.description}</p>
            </div>
            <div>
              <button>update</button>
              <button>completed</button>
              <button onClick={()=>deletedTask(item.id)}>delete</button>
               
              </div>          
            </li>
         
            </div> })}</ul>
    </div>
  )
}

export default Todo
