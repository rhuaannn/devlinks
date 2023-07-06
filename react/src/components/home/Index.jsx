import  {React,useState} from "react";

import "./Style.css";
  

const Home = ({ profileImg, name, phone, email, description }) => {
  return (
    <>
      <img src={profileImg} />
      <h1>{name}
     
      </h1>

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
