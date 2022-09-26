import React from "react";
function ButtonOpacity(props) {
  // let className = 'btn-opacity opacity0'
  let className = 'btn-opacity'
  if (props.className) {
    className += ` ${props.className}`
  }
  return (
    <a href='#' className={className}>{props.children}</a>
  )
}

export default ButtonOpacity
