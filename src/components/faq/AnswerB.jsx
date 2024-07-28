/* eslint-disable react/prop-types */
function Answer({ children }) {
    return (
      <p className=" ">
        <b className="text-gray-800">উত্তর: </b> {children}
      </p>
    );
  }
  
  export default Answer;
  