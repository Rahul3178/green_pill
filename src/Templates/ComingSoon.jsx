import React from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ComingSoon = ({onClose}) => {
 
const currentDate = new Date('may 31,2023 23:59:59');
  return (
    <React.Fragment>

      <Dialog open>
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
            
            </DialogContentText>
            <div className="container-fluid">
            <h3>Coming Soon</h3>
            <h4 className="t-Text">{currentDate.getDate()}/{currentDate.getMonth()}/{currentDate.getFullYear()}</h4>
           </div>            
          </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
};

export default ComingSoon;
