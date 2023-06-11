import React, { useEffect } from "react";
import Launching from "../Templates/Launching";

const WorkExperience = () => {

  useEffect(()=>{
    document.title="Work";
  },[]);
  // const myState = useSelector((state) => state.ChangeComingSoonState);

  // const dispatch = useDispatch();
  // console.log("mystate:");
  // console.log(myState);
  return (
    <div>
      
      <Launching/>
      
    </div>
  );
};
export default WorkExperience;
