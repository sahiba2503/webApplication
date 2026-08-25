// import { useLocation } from "react-router-dom"

// function Sidenavbar() {
//   let location = useLocation();
//   let sideContent =["side navebar"];
//   if(location.pathname.endsWith("/todo")){
//      sideContent = ["task-name","task-description","task-date"];
//   }
//    if(location.pathname.endsWith("/task")){
//      sideContent = ["current-task","delaiy-task","completed-task"];
//   }
//  else{
//    sideContent;
//  }
//   return (
//     <div className='sideNavContainer'>
//       {sideContent.map((item)=>{
//            return <li>{item}</li>
//       })}
//     </div>
//   )
// }

// export default Sidenavbar
import { useLocation } from "react-router-dom";

function Sidenavbar() {
  const location = useLocation();

  let sideContent;

  if (location.pathname.endsWith("/todo")) {
    
    sideContent = ["current-task", "delaiy-task", "completed-task"];
  } else if (location.pathname.endsWith("/task")) {
    sideContent = ["task-name", "task-description", "task-date"];
  } else {
    sideContent = ["side navbar"];
  }

  return (
    <div className="sideNavContainer">
      {sideContent.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
}

export default Sidenavbar;