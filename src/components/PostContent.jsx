/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillHeartFill, BsHeart, BsPersonAdd } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import userImg from "../assets/images/userImg.png";

const PostContent = ({ content }) => {
  // console.log(content);
  const { _id, text, img, name, photoURL } = content;

  const [loved, setLoved] = useState(false);
  const [lovedCount, setLovedCount] = useState(0);

  const handleLove = async () => {
    const updatedLoved = !loved;
    const updatedLovedCount = updatedLoved ? lovedCount + 1 : lovedCount - 1;

    try {
      await axios.patch(`http://localhost:5000/api/v1/contents/${_id}`, {
        lovedCount: updatedLovedCount,
      });

      setLoved(updatedLoved);
      setLovedCount(updatedLovedCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-5 bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={photoURL ? photoURL : userImg}
            alt=""
            className="w-12 rounded-full"
          />
          <div>
            <h1 className="text-base font-bold text-gray-800">{name}</h1>
            <p className="text-xs">Dhaka,Bangladesh</p>
          </div>
        </div>
        <div>
          <BsPersonAdd className="text-xl" />
        </div>
      </div>
      <div className="mt-5">
        <div>
          <p>{text.slice(0, 200)}</p>
          <Link to={`/media/${_id}`}>
            <span className="text-info font-semibold underline underline-offset-4">
              See Details
            </span>
          </Link>
        </div>

        <img src={img} alt="" className="mt-3 rounded" />

        <div className="mt-3 flex items-end gap-5">
          <div className="relative">
            {loved ? (
              <BsFillHeartFill
                className="text-2xl text-error font-bold cursor-pointer"
                onClick={handleLove}
              />
            ) : (
              <BsHeart
                className="text-2xl font-bold cursor-pointer"
                onClick={handleLove}
              />
            )}
            <p className="text-lg font-bold text-secondary absolute -top-4 -right-2">
              {lovedCount}
            </p>
          </div>

          <button className="text-2xl">
            <Link to={`/media/${_id}`}>
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
