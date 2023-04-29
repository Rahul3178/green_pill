import "./App.css";
//import MainProfile from "./components/MainProfileOLD";
import MainProfile from './components/MainProfile'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import NavbarMain from "./components/NavbarMain";
import ContactUs  from "./components/ContactUs";
import WorkExperience from "./components/WorkExperience";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const NavLinks = ["Home", "Project", "Profile", "Contact", "Work_Experience"];
  console.log(NavLinks);
  return (
    <div className="App">
     <NavbarMain navBox={NavLinks} />
      <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<MainProfile/>}  />
        <Route path='contact' element={<ContactUs/>} />
        <Route path='work' element={<WorkExperience/>} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
