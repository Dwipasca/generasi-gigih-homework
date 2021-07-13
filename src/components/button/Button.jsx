import React from "react";

export default function Button(props, ...rest) {
  return <button {...rest}>{props}</button>;
}
