import { useEffect, useState } from "react"


function Task() {
  const[todos,setTodos] = useState([]);
  const [todoName,setTodoName] = useState([]);
  const [todoDes,setTodoDes] = useState([]);
 
  
    useEffect(()=>{
 fetch("http://localhost:3000/gettodo")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setTodos(data);

    })
  },[]);

 function newTaskCreated(e){
  e.preventDefault();
  fetch("http://localhost:3000/posttodo",{
    method:"POST",
    headers:{
      "Content-type":"Application/json"
    },
    body:JSON.stringify({name:todoName,description:todoDes})    
  })
  .then((response)=>{
     return response.json();
  })
  .then((data)=>{
      console.log(data);
      setTodos(data);
      setTodoName("");
      setTodoDes("");

  })

  }
  return (
    <div>
      <form onSubmit={newTaskCreated}>
    <input type="text"  placeholder="Enter a task name" value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
    <input type="text" placeholder="Enter a task description" value={todoDes} onChange={(e)=>setTodoDes(e.target.value)}/>
    <button type="submit" >create</button>
</form>
      <div>{todos.map((item)=>{
        return <div key={item.id}>
          <li>{item.name}</li>
          <li>{item.description}</li>
            </div> })}</div>

    </div>
  )
}

export default Task
