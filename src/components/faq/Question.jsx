/* eslint-disable react/prop-types */
function Question({ children }) {
  return <p className="text-gray-800 font-bold mb-2">Q: {children}</p>;
}

export default Question;
