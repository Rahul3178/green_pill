import { Button } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
      <div className="container-fluid  text-center mt-5">
        <div className="row p-2">
            <div className="col-md-8  p-2 offset-md-2">
                <p className='pnf'>404</p>
                <h3 className='display-5 pnf'>UH OH! You're lost.</h3>
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
            {/* <div className="col-md-4 border p-2">
                <Button variant='contained' color="success"
                  endIcon={<ArrowForwardIosIcon />} >
                    Go Back To Home
                </Button>
            </div> */}
        </div>
      </div>
    </>
  )
}

export default PageNotFound
