
import Task from "./Task"
import Todo from "./Todo"
import Completed from "./Completed"
import { Routes,Route, Navigate } from "react-router-dom"
function Maincontainer() {
  return (
    <div className="mainContainer">
     <Routes>
        <Route path="/task" element={<Task/>}></Route>
        <Route index element={<Navigate  to ="/task"/>} ></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/completed" element={<Completed/>}></Route>
         <Route path="/*" element={<Navigate  to ="/task"/>} ></Route>
     </Routes>
    </div>
  )
}

export default Maincontainer
