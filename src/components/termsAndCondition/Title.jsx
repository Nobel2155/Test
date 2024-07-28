/* eslint-disable react/prop-types */
import React from "react"
function Title({ children }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">{children}</h2>
  );
}

export default Title;
