import React from "react";

import "./Style.css";

import Button from "../button/Index";

const Home = ({ profileImg }) => {
  return (
    <div className="container">
      <div className="main">
        <img src={profileImg} alt="Profile" />
        <h1>Rhuan Marques</h1>
        <hr />
        <h2>FullStack Develop - ReactJs - Nodejs - Sql</h2>
        <hr />
        <p>+55(62)9-982481606</p>
        <p>rhuanmarques1223@gmail.com</p>
        <br />
        <Button
          title="GitHub"
          url="https://github.com/rhuaannn?tab=repositories"
        />
        <Button title="WhatsApp" url="https://wa.me/+55629824816?text=Olá, gostaria de mais informações!"/>
        <Button
          title="Linkedin"
          url="https://www.linkedin.com/in/rhuan-marques-b99791233/"
        />
      </div>
    </div>
  );
};

export default Home;
