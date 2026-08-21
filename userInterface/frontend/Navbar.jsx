
import { useNavigate } from "react-router-dom"
function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="navContainer">
   <ul>
    <li onClick={()=>navigate("/task")}>Task</li>
    <li onClick={()=>navigate("/todo")}>Todo</li>
    <li onClick={()=>navigate("/completed")}>Completed</li>
   </ul>
    </div>
  )
}

export default Navbar
