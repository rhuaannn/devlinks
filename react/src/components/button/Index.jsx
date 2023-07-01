import react from "react";

import "./Style.css"
const Button = ({title, url, style} ) => {

  const handleBtnClickHref = (  ) => {
    
    window.open (url,'_blank')
  }
  return (
    <button onClick={handleBtnClickHref} style={style}>{title}</button>
  )
}

export default Button ;