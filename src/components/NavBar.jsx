import React from "react";
import { Button, Box } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { NavLink ,Link} from "react-router-dom";
const colorBG =
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(250,104,134,1) 100%)";
const NavBar = ({ navBox }) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundImage: colorBG }}
      >
        <div className="container-fluid">
          {/* Brand Icon start here */}
          <Link className="navbar-brand" to="/">
            <TerminalIcon fontSize="large" className="white-text" />
          </Link>
          {/* Brand Icon End here */}
                    {/* <div className="container-fluid">
                    <div className="text-center">
                        <h3>Full Stack Developer</h3>
                    </div>
                    </div> */}
                
                     
          {/* here side drawer started */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          {/* here side drawer ended */}

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ">
          {navBox.map((link,index)=>(
            <li className="nav-items" key={index}>
            
           <NavLink to={link} className="nav-link text-uppercase" style={{textDecoration:'none',color:'whitesmoke'}} >{link}</NavLink>
             
           </li>
             
          ))}
        
             {/* <li className="nav-item " key={index}>
          <a className="nav-link  active text-uppercase " aria-current="page" href="/" style={{color:'whitesmoke'}}>{link}</a>
        </li> */}


        {/* drop down menu code 
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> 
        
        */}
      </ul>
      {/* <div className="d-flex gap-3">
             <button className="btn border "  style={{background: "rgba(250,104,134,1)",color:'whitesmoke'}}>
              BookShelf
            </button>
             <button className="btn border"  style={{background: "rgba(250,104,134,1)",color:'whitesmoke'}}>
              BookShelf
            </button>
            </div> */}

            <Box display="flex">
                  <Button
                    sx={{
                      marginLeft: "auto",
                      background: "rgba(250,104,134,1)",
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ marginLeft: 2, background: "rgba(250,104,134,1)" }}
                    variant="contained"
                  >
                    Book Shelf
                  </Button>
                </Box>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
