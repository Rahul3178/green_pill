import React from "react";


const bgImage='linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';


const FooterDetails = () => {
  return (
    <React.Fragment>
      <footer style={{backgroundImage:bgImage}}>
      <div   className="container-fluid  mt-5 p-4 text-center">
          <div className="row ">
            <div className="col-md-6  ">
            <ul style={{listStyleType:'none'}}>
            <h5>Address</h5>
            <li>
              New Delhi Dwarka<br/>
              Pin 110078
            </li>
            </ul>
            </div>
            <div className="col-md-6 ">
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
            <div className="col-md-12">
           <p>
           &copy; 2023 Rahul Kumar <span className="fw-b">All Right Reserved</span>
           </p> 
            </div>
          </div>
      </div>
     </footer>
    </React.Fragment>
  );
};

export default FooterDetails;
