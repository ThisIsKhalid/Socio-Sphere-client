import { BiCommentDetail } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import userImg from "../assets/images/userImg.png";
import your_name from "../assets/images/your_name.jpg";

const PostContent = () => {
  return (
    <div className="mb-5 bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" className="w-12 rounded-full" />
          <div>
            <Link to="/profile">
              <h1 className="text-base font-bold text-gray-800">
                Khalid Hasan
              </h1>
            </Link>
            <p className="text-xs">Dhaka,Bangladesh</p>
          </div>
        </div>
        <div>
          <BsPersonAdd className="text-xl" />
        </div>
      </div>
      <div className="mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus
          suscipit non. Expedita nemo velit blanditiis in impedit nulla nobis
          vel commodi nisi minus! Voluptatum....{" "}
          <Link to="/post-details">
            <span className="text-info font-semibold underline underline-offset-4">
              read more
            </span>
          </Link>
        </p>

        <img src={your_name} alt="" className="mt-3 rounded" />

        <div className="mt-3 flex items-end gap-5">
          <button className="text-2xl">
            <SlLike />
          </button>
          <button className="text-2xl">
            <Link to="/post-details">
              <BiCommentDetail />
            </Link>
          </button>
          <button className="text-2xl">
            <TbShare3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
