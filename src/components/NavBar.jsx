import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
const colorBG =
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(250,104,134,1) 100%)";
const NavBar = ({ navBox }) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg sticky-top  mb-5"
        style={{ backgroundImage: colorBG }}
      >
        <div className="container">
          {/* Brand Icon start here */}
          <Link className="navbar-brand Name-logo" to="/">
            {/* <TerminalIcon fontSize="large" className="white-text" /> */}
            <h3 className="Tag-Name white-text">Rahul</h3>
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

          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {navBox.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a aria-current="page" 
                    href={link}
                    className="nav_Link"
                    
                  >
                    {link}
                  </a>
                </li>
              ))}

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
            <Box display="flex">
              <div className="btn btn-outline-success"
                sx={{
                  marginLeft: "auto",
                  background: "rgba(250,104,134,1)",
                }}
                variant="contained"
              >
                <AccountCircleSharpIcon/> Login
              </div>
              {/* <Button
                sx={{ marginLeft: 2, background: "rgba(250,104,134,1)" }}
                variant="contained"
              >
                <Link className="white-text" to="/bookShelf">
                  Bookshelf
                </Link>
              </Button> */}
            </Box>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
