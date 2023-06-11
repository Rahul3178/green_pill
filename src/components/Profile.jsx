import React, { useEffect } from "react";
import profile from "../assets/Rahul-web2.png";
const Profile = () => {
  useEffect(() => {document.title = "Home"; },[]);

  return (
    <>
      <section className="container mt-5 mb-5">
        <div className="row d-flex">
          <div className="col-md-7 mt-md-3 mt-sm-3 text-start order-2 order-md-1 ">
            <h1 className="mb-3">
              Hi i am <span>Rahul</span>
              <span className="wave">👋🏾</span>
            </h1>
              <div className="">
              <h3 className="fw-bold t-red">Cs Engineer</h3>
              <br />
              <p className="Home-content">
                I am a CS engineer passionate about building systems that scale
                and currently working with Google as a Staff Software Engineer
                with the Dataproc team in making Apache Spark faster.
              </p>
              <p className="Home-content">
                Throughout my career, I have worked across a variety of domains
                and have built systems, services, and platforms that scale to
                billions; and have worked at companies like Unacademy, Amazon,
                Practo, and D. E. Shaw.
              </p>
              <p className="Home-content">
                I hold a Master's in CS from IIIT-Hyderabad, specializing in
                Databases, Information Retrieval and Web Mining. I teach a
                cohort-based course on System Design and have taught 1000+
                engineers. On the side, I am
              </p>
            </div>
          </div>

          <div className="col-md-5 order-sm-1 order-md-2   mb-3">
            <div className="container">
              <img
                className="img-fluid mx-auto d-block"
                src={profile}
                style={{borderRadius:30}}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
