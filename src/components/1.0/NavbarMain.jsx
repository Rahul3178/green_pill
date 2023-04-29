import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";

import TerminalIcon from "@mui/icons-material/Terminal";
import NavbarDrawer from "./NavbarDrawer";


const colorBG =
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(250,104,134,1) 100%)";
const NavbarMain = ({ navBox }) => {
  // now using use state to change the value of Tabs value props when we click on any tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // using theme to make break  point to show drawer icon

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundImage: colorBG }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={1}>
                  <TerminalIcon fontSize="large" />
                </Grid>
                <Grid item xs={10}>
                  <Typography>Full-Stack-Developer</Typography>
                </Grid>
                <Grid item xs={1}>
                  <NavbarDrawer navlinks={navBox} />
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid container sx={{ placeItems: "center" }}>
              {/* for logo */}
              <Grid item xs={1}>
                <TerminalIcon fontSize="large" />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={handleChange}
                >
                  {navBox.map((link, index) => (
                    <Tab key={index} label={link}>
                    </Tab>
                  ))}
                </Tabs>
              </Grid>
              {/* Empty grid for space */}
              <Grid item xs={1} />
              <Grid item xs={3}>
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
                    Blogs
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavbarMain;
