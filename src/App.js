import './App.css';
import MainProfile from './components/MainProfile';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarMain from './components/NavbarMain';



function App() {
 const NavLinks=["Home","Project","Profile","Contact","Work_Experience"]
 console.log(NavLinks)
  return (
    <div className="App">
    <NavbarMain navBox={NavLinks} />
     <MainProfile/>
    </div>
  );
}

export default App;
