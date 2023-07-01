import React from "react";

import profileImg from "../../assets/317766363_3391305224440800_2214379255806886249_n.jpg";
import "../../GlobalStyle.css";
import Button from "../button/Index";
import Home from "../home/Index";

const Layout = () => {
  const styleOne = {color: "black"}
  const styleTwo = {backgroundColor: "#8cab94"}
  
  const combinedStyle = { ...styleOne, ...styleTwo };
  return (
    <>
      <div className="container">
        <div className="main">
         {/*  <Button title="Dark-Mode" style={combinedStyle} disabled={true}/> */}
          <Home profileImg={profileImg} title="Dark/Ligth"  />
          <Button
            title="GitHub"
            url="https://github.com/rhuaannn?tab=repositories"
          />
          <Button
            title="WhatsApp"
            url="https://wa.me/+55629824816?text=Olá, gostaria de mais informações!"
          />
          <Button
            title="Linkedin"
            url="https://www.linkedin.com/in/rhuan-marques-b99791233/"
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
