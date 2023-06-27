import React from "react";

function Button(props) {
  return (
    <>
      <div className=" button container">
        <a className="tasks" href={props.url}>
          <span className="font-weight-light">{props.text}</span>
        </a>
      </div>
    </>
  );
}

export default Button;
