import './App.css';
import MainProfile from './components/MainProfile';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarMain from './components/NavbarMain';


function App() {
  return (
    <div className="App">
    <NavbarMain/>
     <MainProfile/>
    </div>
  );
}

export default App;
