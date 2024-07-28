import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import img from "../../../assets/homepage/package/trip-package-image.png"

const PackageCard = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-2 rounded-lg">
        <figure>
          <Image className="rounded-lg w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body py-3 px-0">
          <h2 className="card-title text-sm">Pahalgam, Kashmir, India</h2>
          <div className="flex justify-between gap-2">
            <div className="flex gap-2 flex-col">
              <p className="text-xs">3 day 4 night</p>
              <p className="text-xs">Breakfast included</p>
              <p className="text-xs">Free Transport</p>
            </div>
            <div className="flex gap-2 items-start text-slate-500">
              {/* <Link className="border p-[2px]"> */}
                <PiShareFatLight />
              {/* </Link> */}
              {/* <Link className="border p-[2px]"> */}
                <CiHeart />
              {/* </Link> */}
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="text-orange-400 flex gap-1 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex gap-2 text-xs">
              <p className="text-red-500 line-through">$2,500</p>
              <p>$2,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;