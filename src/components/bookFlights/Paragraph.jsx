/* eslint-disable react/prop-types */
function Paragraph({ children, width = "590px" }) {
  return (
    <p style={{ width: `${width}` }} className={`text-base text-[#282828]`}>
      {children}
    </p>
  );
}

export default Paragraph;
