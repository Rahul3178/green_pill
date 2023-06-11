import React from "react";


const bgImage='linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';


const Footer = () => {
  return (
    <React.Fragment>
      <footer style={{backgroundColor:"whitesmoke"}}>
      <div   className="container  mt-3  p-4 text-center">
          <div className="row ">
            <div className="col-md-4">
              <p className="Tag-Name" style={{fontSize:"80px"}}>Rahul</p>
            </div>
            <div className="col-md-4">
            <ul style={{listStyleType:'none'}}>
            <h5>Address</h5>
            <li>
              New Delhi Dwarka<br/>
              Pin 110078
            </li>
            </ul>
            </div>
            <div className="col-md-4 ">
            <h5>Contact</h5>
              <ul style={{listStyleType:'none'}}>
                <li>
                  Ph. 999617****
                </li>
                <li>
                <a style={{color:"black"}} href="mailto:kmrrahul997@hmail.com">Kmrrahul997@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
          <hr style={{ border: "1px solid Red" }} />
            <div className="col-md-12">
           <p>
           &copy; 2023|Rahul Kumar <span className="fw-b">All Rights Reserved</span>
           </p> 
            </div>
          </div>
      </div>
     </footer>
    </React.Fragment>
  );
};

export default Footer;
