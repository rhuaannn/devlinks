import react from "react";

import "./Style.css"
const Button = ({title, url} ) => {

  const handleBtnClickHref = (  ) => {
    window.open (url,'_blank')
  }
  return (
    <button className="btn" onClick={handleBtnClickHref}>{title}</button>
  )
}

export default Button ;