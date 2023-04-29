import React from "react";
import { Coming } from "../Actions/ActionIndex";
import { useDispatch, useSelector } from "react-redux";
import ComingSoon from "../Templates/ComingSoon";
import Launching from "../Templates/Launching";

const WorkExperience = () => {
  const myState = useSelector((state) => state.ChangeComingSoonState);

  const dispatch = useDispatch();
  console.log("mystate:");
  console.log(myState);
  return (
    <div>
      <h3>Work_experience_page</h3>
      <Launching/>
      
    </div>
  );
};
export default WorkExperience;
