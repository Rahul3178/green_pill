import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Launching = () => {

  return (
    <>
      <div className="container-fluid  text-center mt-5">
        <div className="row p-2">
          <div className="col-md-8  p-2 offset-md-2">
            <p className="pnf">launching soon</p>
            {/* <div className="container-values  mb-5 ">
              <div className="contained-value shadow-lg ">
                <span className="t-value" id="days_value" />
                <span className="t-text"  >Days</span>
              </div>
              <div className="contained-value ">
              <span className="t-value"  id="hours_value"/>
              <span className="t-text" >Hours</span>
              </div>
              <div className="contained-value ">
              <span className="t-value" id="minutes_value"/>
              <span className="t-text" >Minutes</span>
              </div>
              <div className="contained-value ">
              <span className="t-value"  id="seconds_value"/>
              <span className="t-text" >Seconds</span>
              </div>
            </div> */}
            
            <p className="display-6 mb-md-5">
              Hurray!!! we will coming soon.
            </p>
            <Button
              variant="contained"
              color="success"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Link
                to="/"
                style={{ color: "whitesmoke", textDecoration: "none" }}
              >
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
  );
                

};
 // Script start

 var deadline = new Date("May 31, 2023 24:00:00").getTime();
               
              
               
                
//  var x= setInterval(function (){
//      var now = new Date().getTime();
//      var t = deadline - now;
//    var  days= Math.floor(t / (1000 * 60 * 60 * 24));
//    var  hours= Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    var  minutes= Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//    var  seconds= Math.floor((t % (1000 * 60)) / 500);
     
//      document.getElementById("days_value").innerHTML = days;  
//      document.getElementById("hours_value").innerHTML = hours;  
//      document.getElementById("minutes_value").innerHTML = minutes;  
//      document.getElementById("seconds_value").innerHTML = seconds;  
//      if(t<0)
//      {
//        clearInterval(x);
       
//        document.getElementById("days_value").innerHTML = '0';  
//        document.getElementById("hours_value").innerHTML = '0';  
//        document.getElementById("minutes_value").innerHTML = '0';  
//        document.getElementById("seconds_value").innerHTML = '0';  
//      }
//    } , 1000);
  
     
// script end
export default Launching;
   