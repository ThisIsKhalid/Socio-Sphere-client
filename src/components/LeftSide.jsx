import { BsPersonAdd, BsGithub, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import userImg from "../assets/images/userImg.png";

const LeftSide = () => {
  return (
    <>
      <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg px-5 h-[300px] flex flex-col justify-center">
        {/* ------------------- */}
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <img src={userImg} alt="" className="w-16 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 uppercase">
                Khalid Hasan
              </h1>
              <p className="text-gray-500 text-sm">30 friends</p>
            </div>
          </div>
          <div>
            <BsPersonAdd className="text-xl" />
          </div>
        </div>

        {/* -------------------------- */}
        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-lg" />
            <p>Dinajpur , Bangladesh</p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline className="text-lg" />
            <p>
              Works at <span className="font-semibold">Brain Station 23</span>
            </p>
          </div>
        </div>

        {/* ---------------------------- */}
        <div>
          <h1 className="text-lg font-semibold mb-1 underline underline-offset-4">
            Social Profiles :
          </h1>
          <div className="flex items-center gap-1">
            <BsGithub className="text-lg" />
            <p>
               ThisIsKhalid
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BsTwitter className="text-lg" />
            <p>
              Khalid_Hasan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
