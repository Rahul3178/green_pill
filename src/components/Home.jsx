import React, { useEffect } from "react";
import profile from "../assets/Rahul-web2.png";
import Profile from "./Profile";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
const Home = () => {
  useEffect(() => {document.title = "Home"; },[]);

  return (
    <>
     <Profile/>
     <Projects/>
     <ContactUs/>
    </>
  );
};

export default Home;
