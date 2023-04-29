import {
  Card,
  Button,
  Grid,
  Stack,
  CardMedia,
  CardContent
 
} from "@mui/material";
import React from "react";
import { Coming } from '../Actions/ActionIndex'
import { useDispatch , useSelector } from 'react-redux'
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import snap from "../assets/Snap.jpg";
import ComingSoon from "../Templates/ComingSoon";
import ContactUs from "./ContactUs";
const MainProfile = () => {
  const myComingSoonState= useSelector((state)=>state.ChangeComingSoonState);
 
  const dispatch= useDispatch();
  console.log("myComingSoonState:");
   console.log(myComingSoonState)

  return (
    <React.Fragment>
      <div className="container-fluid-md  mt-md-3" style={{ borderStyle: "solid", borderWidth:0 }} >

        <Grid className="p-3" container item xs={12} alignItems='center' justifyContent='center'
         style={{borderStyle: "solid", borderWidth:0,borderRadius:30,
        }}>
        
        <Grid item md={8} sm={6} xs={12} >
        <Card elevation={3} className="p-md-2 p-xs-1" style={{ height: 500 }}>
              
              <h1 className="text-center fw-bold ProfileHead p-2">Hey! I Am </h1>
              <h1 className="text-center fw-bold ProfileHead p-2">Rahul Kumar.</h1>
              <CardContent>
              <h4 className="overflow fw-light fst-italic ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                cum, similique dolorum fugit error est optio incidunt id aut
                iusto maxime. Quia quibusdam corrupti eligendi rerum nostrum
                consequatur quae debitis!
              </h4>

              <Stack
                className="mt-5"
                direction="row"
                spacing={5}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  className="text-wrap fw-light"
                  variant="contained"
                  onClick={() => {dispatch(Coming())}}
                  endIcon={<LinkedInIcon />}
                >
                  Profile
                </Button>
                <Button
                  onClick={() => {dispatch(Coming())}}
                  variant="contained"
                  color="success"
                  endIcon={<SendIcon />}
                >
                  Resume
                </Button>
                {myComingSoonState&& <ComingSoon onClose={()=>dispatch(Coming())} />}
              </Stack>
              </CardContent>
            </Card>
        </Grid>
        <Grid item md={4} sm={6}  xs={12}  className="border">
        <Card className="border" elevation={3} style={{ height: 500 }}>
              <CardMedia
                
                component="img"
                height='500'
                image={snap}
                alt="Profile_Pic"
              />
            </Card>
        </Grid>
        </Grid>
        
      </div>
      <ContactUs/>
    </React.Fragment>
  );
};

export default MainProfile;
