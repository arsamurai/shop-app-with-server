import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={cn("button", props.className, {
        "button--outline": props.outline,
      })}
    >
      {props.children}
    </button>
  );
}

export default Button;
