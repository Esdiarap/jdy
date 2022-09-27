import React from "react";

function ButtonOpacity(props) {
  // let className = 'btn-opacity opacity0'
  let className = 'btn-opacity'
  if (props.className) {
    className += ` ${props.className}`
  }
  return (
    <button className={className}>{props.children}</button>
  )
}

export default ButtonOpacity
