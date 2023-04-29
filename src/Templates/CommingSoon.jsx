import React from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const CommingSoon = ({onClose}) => {
 
const currentDate = new Date().toLocaleString();
  return (
    <React.Fragment>

      <Dialog open='true'>
        <DialogTitle  >
        <Grid container>
        <Grid item xs={8}>
        <h4> Welcome </h4>
        </Grid>
        <Grid item xs={4}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </Grid>
        </Grid>
         
        </DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              <h3>Comming Soon</h3>
              <h4>{currentDate}</h4>
            </DialogContentText>
          </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
};

export default CommingSoon;
