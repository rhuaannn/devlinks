import React from "react";

import "./Style.css";
import "../../GlobalStyle.css";



const Home = ({ profileImg, name, phone, email, description }) => {
  return (
    
   <>
        <img src={profileImg} alt="Profile" />
        <h1>{name}</h1>
        <hr />
        <h2>{description}</h2>
        <hr />
        <p>{phone}</p>
        <p>{email}</p>
        <br />
</>
    
   );
};

export default Home;
