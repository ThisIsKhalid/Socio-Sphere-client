/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import userImg from "../assets/images/userImg.png";
import your_name from "../assets/images/your_name.jpg";

const PostContent = ({ content }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // console.log(content);
  const { text, file } = content;

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked ${item}`);
  };

const mainFileUrl = file.replace(/\\/g, "/");

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
          {text}
          <Link to="/post-details">
            <span className="text-info font-semibold underline underline-offset-4">
              read more
            </span>
          </Link>
        </p>

        <img
          src={`http://localhost:5000/${mainFileUrl}`}
          alt=""
          className="mt-3 rounded"
        />

        <div className="mt-3 flex items-end gap-5">
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="" onClick={handleDropdownToggle}>
              <SlLike className="text-2xl" />
            </label>
            {dropdownOpen && (
              <>
                <ul
                  tabIndex={0}
                  className="dropdown-content px-5 py-2 shadow bg-gray-100 rounded flex items-center gap-5 mb-4 ml-1"
                >
                  <li>
                    <button onClick={() => handleItemClick("Like")}>
                      <SlLike className="text-2xl text-info font-bold" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleItemClick("Love")}>
                      <BsHeart className="text-2xl text-error font-bold" />
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
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
