import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const NavbarDrawer = ({ navlinks }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      <IconButton onClick={()=>setDrawerOpen(true)} sx={{marginLeft:'auto' ,color:'white'}}>
        <MenuIcon />
      </IconButton>
      <Drawer PaperProps={{sx : {background: "rgba(63,94,251,1)"}
      }} anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {navlinks.map((links, index) => (
            <ListItemButton key={index} divider onClick={()=>setDrawerOpen(false)}>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}}>{links}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default NavbarDrawer;
