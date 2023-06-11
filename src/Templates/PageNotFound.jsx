import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link ,useRouteError } from 'react-router-dom';


const PageNotFound = () => {
  useEffect(()=>{
    document.title=" 404 Page Not Found "
  });
  const {status, statusText}=useRouteError();
  // console.log(status);
  // console.log(statusText);

  return (
    <>
      <div className="container-fluid  text-center mt-5">
        <div className="row p-2">
            <div className="col-md-8  p-2 offset-md-2">
                <p className='pnf'>{status}</p>
               
                <h3 className='display-5 pnf'>UH OH! You're lost. {statusText}</h3>
                <p>
                The page you are looking for does not exist. How you got there is a mystery. But you can click the button below to go back to home page.
                </p>
                <Button variant='contained' color="success"
                  endIcon={<ArrowForwardIosIcon />} >
                  <Link  to='/' style={{color:'whitesmoke',textDecoration:'none'}}>
                    Go Back To Home
                    </Link>
                </Button>
            </div>
           </div>
      </div>
    </>
  )
}

export default PageNotFound
