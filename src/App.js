import "./App.css";
import MainProfile from './components/MainProfile'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ContactUs  from "./components/ContactUs";
import { Route,Routes } from "react-router-dom";
import WorkExperience from "./components/WorkExperience";
import NavBar from "./components/NavBar";
import FooterDetails from "./components/FooterDetails";
import PageNotFound from "./Templates/PageNotFound";


function App() {
  const NavLinks = ["Home", "Project", "Profile", "Contact", "Work_Experience"];
  console.log(NavLinks);
  return (
    <div className="App">
     {/* <NavbarMain navBox={NavLinks} /> */}
     <NavBar navBox={NavLinks}/>
      <Routes>
        <Route path='/' element={<MainProfile/>}  />
        <Route path='home' element={<MainProfile/>}  />
        <Route path='contact' element={<ContactUs/>} />
        <Route path='work_experience' element={<WorkExperience/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <FooterDetails/>
    </div>
  );
}

export default App;
