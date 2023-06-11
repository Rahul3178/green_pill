import React,{useEffect} from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { booklink } from "./DDataConfig";
import FeedIcon from '@mui/icons-material/Feed';



const BookShelf = () => {
  useEffect(()=>{
    document.title="BookShelf";
  },[]);
  return (
    <>
      <div className="container" style={{minHeight:'61.2vh'}}>
     
      <div className="container-fluid mb-2">
        <p className="display-5 pnf">
          <span className="text-decoration-underline">
            Book
            <MenuBookIcon fontSize="larger" />
            Shelf
          </span>
        </p>
        {/* <hr className='' style={{border:'2px solid Red'}} /> */}
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-md-6 col-lg-6">
            <ul className="text-start ">
              <h3 className="fw-bold text-center"><FeedIcon fontSize="large"/>Blogs</h3>
              <hr style={{ border: "1px solid Red" }} />
              {booklink.map((booklink) => {
                return (
                  <li className="fs-5 p-1" key={booklink.id} >
                    <a className="BookShelf-link  " target="_blank" rel="noreferrer"  href={booklink.link}>
                      {booklink.title}
                    </a>
                    {/* <span class="position-absolute translate-middle badge rounded-pill bg-danger">New</span> */}
                    <span className="text-secondary fs-6"> by {booklink.author}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6 col-lg-6">
            <ul>
              <h3 className="fw-bold text-center"><FeedIcon fontSize="large"/>Currently Reading</h3>
              <hr style={{ border: "1px solid Red" }} />
            </ul>
          </div>
        </div>
      </div>
         
      </div>
    </>
  );
};

export default BookShelf;
