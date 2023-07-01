import React from "react";

import "./Style.css";
import "../../GlobalStyle.css";



const Home = ({ profileImg }) => {
  return (
    
   <>
        <img src={profileImg} alt="Profile" />
        <h1>Rhuan Marques</h1>
        <hr />
        <h2>FullStack Developer - ReactJs - Nodejs - Sql</h2>
        <hr />
        <p>+55(62)9-982481606</p>
        <p>rhuanmarques1223@gmail.com</p>
        <br />
</>
    
   );
};

export default Home;
