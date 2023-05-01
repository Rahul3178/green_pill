import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { booklink } from "./DDataConfig";

const BookShelf = () => {
  return (
    <>
      <div className="container-fluid mb-5">
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
          <div className="col-md-6 ">
            <ul className="text-start ">
              <h3 className="fw-bold text-center">Fav Blogs</h3>
              <hr style={{ border: "1px solid Red" }} />
              {booklink.map((booklink) => {
                return (
                  <li className="fs-5" key={booklink.id}>
                    <a className="BookShelf-link  " target="_blank" rel="noreferrer"  href={booklink.link}>
                      {booklink.title}
                    </a>
                    <span className="text-secondary">[{booklink.author}]</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h3 className="fw-bold text-center">Currently Reading</h3>
              <hr style={{ border: "1px solid Red" }} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookShelf;
