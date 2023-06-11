import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    
       <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    
  );
}

export default App;

