import React from "react";
import avtar from "../assets/avtar.png";
import { projectDetails } from "./ProjectData";
const Projects = () => {
  return (
    <>
      <div
        className="container-fluid justify-content-center "
        style={{
          minHeight: "64vh",
          display: "flex",
          flexDirection: "row",
          gap: 20,
          backgroundColor:"whitesmoke",
          borderRadius:30
        }}
      >
        <div className="row ">

          {projectDetails.map((projectDetails)=>(

          <div className="col-md-4 mt-3" key={projectDetails.id}>
            {/* col 1 */}
            <div
              className="card "
              style={{ minWidth: "200px", maxWidth: "400px", minHeight:'300px',marginBottom:'10px' }}
            >
              <div className="container">
                <img
                  className=".card-img-top"
                  src={avtar}
                  alt="Project"
                  style={{ maxHeight: "300px", maxWidth: "200px" }}
                />
              </div>
              <div className="card-body">
                <p className="card-title">{projectDetails.name}</p>
                <p className="card-subtitle mb-2 text-muted">
                  {projectDetails.technology}
                </p>
                <p>{projectDetails.details}</p>
              </div>
              <div className="card-footer ">
                <div
                  className="container justify-content-center"
                  style={{ display: "flex", flexDirection: "row", gap: "25px" }}
                >
                  <button className="btn btn-outline-success"><a>Code</a></button>
                  <button className="btn btn-outline-danger"><a>Live Run</a></button>
                </div>
              </div>
            </div>
          </div>







          ))}
        </div>
        {/* end row */}
      </div>
    </>
  );
};

export default Projects;
