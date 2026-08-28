import Maincontainer from "../Maincontainer";
import Navbar from "../Navbar";
import Sidenavbar from "../Sidenavbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className='bodyContainer'>
        <Sidenavbar />
        <Maincontainer />
      </div>
    </div>
  );
}

export default App;
