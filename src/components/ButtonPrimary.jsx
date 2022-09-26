import React from "react";

function ButtonPrimary(props) {
  let className = 'btn btn-primary'
  if (props.className) {
    className += ` ${props.className}`
  }
  return (
    <button className={className}>{props.children}</button>
  )
}

export default ButtonPrimary
