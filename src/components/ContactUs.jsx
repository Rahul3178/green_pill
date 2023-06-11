import React ,{useEffect}from 'react'
import { Grid, Card, CardContent,  TextField,Button} from '@mui/material'
import '../App.css'
document.title="contact";
const ContactUs = () => {
  useEffect(()=>{
    document.title="Contact";
  },[]);

  return (
    <React.Fragment>

      <div className='container-fluid Backpk mb-5'>

      
       <Grid container elevation={12} className='mt-5  justify-content-center' >
              
              <Grid item md={6}  xs={12} className='border rounded'>
                <Card>
                
                <h1 className='ProfileHead p-sm-1'>Contact Me</h1>
                <p className='ProfileHead fw-er text-muted '>Fill this form, I will try reach you within 24 hours</p>
                
                  <CardContent>
                    <form action="/">
                      <Grid container spacing={1} >
                        <Grid item xs={12} sm={6} border>
                          <TextField label='First Name' id='firstName' placeholder='Enter your first Name..' variant='outlined' fullWidth required='true'/>
                        </Grid>
                        <Grid item xs={12} sm={6} border>
                          <TextField label='Last Name' id='lastName' placeholder='Enter your last Name..' variant='outlined' fullWidth required='true'/>
                        </Grid>
                        <Grid item xs={12} border>
                          <TextField type='email' label='Email' id='email' placeholder='Enter your email..' variant='outlined' fullWidth required='true'/>
                        </Grid>
                        <Grid item xs={12} border>
                          <TextField type='number' label='Phone' id='phone' placeholder='Enter your Phone..' variant='outlined' fullWidth required='true'/>
                        </Grid>
                        <Grid item xs={12} border>
                          <TextField  multiline rows={4} label='message' id='message' placeholder='Enter your Message..' variant='outlined' fullWidth required='true'/>
                        </Grid>
                        <Grid item xs={12} border>
                          <Button  variant='contained' color='success' fullWidth>Submit</Button>
                          
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
       </Grid>
       </div>
    </React.Fragment>
  )
}

export default ContactUs
