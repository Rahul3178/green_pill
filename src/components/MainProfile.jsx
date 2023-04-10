import { Container, Card, Button, Grid, Stack, CardHeader, CardMedia } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import snap from '../assets/Snap.jpg';
const MainProfile = () => {
    return (
        <React.Fragment>
            <Container className='mt-5 MuiContainer-maxWidthMd'>
                <Grid item container xs={12}>
                    <Grid item lg={8} xs={12} >

                        <Card  elevation={3} className='mt-5' style={{height:400}}>
                            <CardHeader title="Hi i  am Rahul" />

                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum, similique dolorum fugit error est optio incidunt id aut iusto maxime. Quia quibusdam corrupti eligendi rerum nostrum consequatur quae debitis!</h4>

                            <Stack className='mb-5' direction="row" spacing={5} justifyContent='center' alignItems='center'>
                                <Button variant="contained" color='success'>View Profile</Button>
                                <Button variant="contained" endIcon={<SendIcon />} >Resume</Button>
                            </Stack>

                        </Card>
                    </Grid>
                    <Grid item container lg={4} xs={12} className='mb-5'>
                        <Card  className="mt-5" elevation={3}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={snap}
                                alt="Profile_Pic"
                            />
                        </Card>
                    </Grid>
                </Grid>


            </Container>
        </React.Fragment>
    )
}

export default MainProfile
