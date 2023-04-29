import {
  Container,
  Card,
  Button,
  Grid,
  Stack,
  CardHeader,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import snap from "../assets/Snap.jpg";
import CommingSoon from "../Templates/CommingSoon";
const MainProfile = () => {
  const [openModel, setOpenModel] = useState(false);

  const commingSoonHandler = () => {
    setOpenModel(false);
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-5 border ">
        <Grid container alignItems="center" justifyContent='center' xs={12} className="border" color='red'>
        <Grid item container xs={12} className="border " >
          <Grid item lg={8} xs={12}>
            <Card elevation={3} className="mt-5 p-5" style={{ height: 400 }}>
              <CardHeader className="" title="Hi i  am Rahul" />
              <CardContent>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                cum, similique dolorum fugit error est optio incidunt id aut
                iusto maxime. Quia quibusdam corrupti eligendi rerum nostrum
                consequatur quae debitis!
              </h4>

              <Stack
                className="mb-5"
                direction="row"
                spacing={5}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<LinkedInIcon />}
                >
                  View Profile
                </Button>
                <Button
                  onClick={() => setOpenModel(true)}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Resume
                </Button>
                {openModel && <CommingSoon onClose={commingSoonHandler} />}
              </Stack>
              </CardContent>
            </Card>
          </Grid>
{/* first grid end here */}

          <Grid item container lg={4} xs={12} className="mb-5">
            <Card className="mt-5" elevation={3}>
              <CardMedia
                component="img"
                height="400"
                image={snap}
                alt="Profile_Pic"
              />
            </Card>
          </Grid>
          {/* second grid end here */}
        </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default MainProfile;
