import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

const PageHome = () => {

  const checkOnProfile = useSelector(state => state);
  console.log(checkOnProfile);
  
  return (
    <div className="wrap">
      <div className="home-ins-wrap">
        <p>Main Page</p>
        <h4>On page 'Profile' check - {checkOnProfile? 'YES': "NO"}</h4>
      </div>
  
    </div>
  )
};

export default PageHome;