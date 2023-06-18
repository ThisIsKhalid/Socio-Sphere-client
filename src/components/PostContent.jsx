import { SlLike } from "react-icons/sl";
import your_name from "../assets/images/your_name.jpg";
import { BiCommentDetail } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const PostContent = () => {
  return (
    <>
      <div className="mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus
          suscipit non. Expedita nemo velit blanditiis in impedit nulla nobis
          vel commodi nisi minus! Voluptatum....{" "}
          <span className="text-info font-semibold underline underline-offset-4">
            read more
          </span>
        </p>

        <img src={your_name} alt="" className="mt-3 rounded" />

        <div className="mt-3 flex items-center gap-5">
          <button className="text-2xl">
            <SlLike />
          </button>
          <button className="text-2xl">
            <BiCommentDetail />
          </button>
          <button className="text-2xl">
            <TbShare3 />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostContent;
