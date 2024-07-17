import Image from "next/image";
import img from "../../../assets/homepage/package/HAMS BANNER.jpg";

const Holiday = () => {
  return (
    <div className="pt-10 max-w-[1200px] mx-auto">
      <Image className="w-full rounded-md" src={img} alt="" />
    </div>
  );
};

export default Holiday;
