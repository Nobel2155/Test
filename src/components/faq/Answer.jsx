/* eslint-disable react/prop-types */
function Answer({ children }) {
  return (
    <p className=" ">
      <b className="text-gray-800">A: </b> {children}
    </p>
  );
}

export default Answer;
