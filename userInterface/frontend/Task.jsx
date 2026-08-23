import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom";
function Task() {
  const[todos,setTodos] = useState([]);
  const [todoName,setTodoName] = useState("");
  const [todoDes,setTodoDes] = useState("");
 
  let navigate = useNavigate();
    useEffect(()=>{
 fetch("http://localhost:5000/gettodo")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setTodos(data);

    })
  },[]);

  function newTaskCreated(){
   
   
   fetch("http://localhost:5000/posttodo",{
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
})
 
  setTodoName("");
  setTodoDes("");
navigate("/todo");
  }
  
  return (
    <div>
      <form onSubmit={newTaskCreated}>
    <input type="text"  placeholder="Enter a task name" value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
    <input type="text" placeholder="Enter a task description" value={todoDes} onChange={(e)=>setTodoDes(e.target.value)}/>
    <button type="submit" >create</button>
</form>    

    </div>
  )
}

export default Task
