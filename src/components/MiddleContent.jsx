import axios from "axios";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiCommentDetail } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import userImg from "../assets/images/userImg.png";
import your_name from "../assets/images/your_name.jpg";
import PostContent from "./PostContent";

const MiddleContent = () => {
  

  return (
    <div className="">
      

      {/* -----POSTS----- */}
      <PostContent />
    </div>
  );
};

export default MiddleContent;
