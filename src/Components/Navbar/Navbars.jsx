import React from "react";
import {Link} from "react-router-dom";

const Navbars = () => {
  return (

      <>
      
        <img id="mainlogo" src="./Images/mainLogo.jpg"></img>

        <Link id="heading4" to={"/"}>Home</Link>
        <Link id="heading3" to={"/about"}>About</Link>
        <Link id="heading2" to={"/menu"}>Menu</Link>
        <Link id="heading1" to={"/franchise"}>Franchise</Link>

      </>
  
  );
};

export default Navbars;
