import { BiCommentDetail } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import userImg from "../assets/images/userImg.png";
import your_name from "../assets/images/your_name.jpg";

const PostContentDetails = () => {
  return (
    <div className="lg:w-3/4 w-full mx-auto px-5">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            possimus suscipit non. Expedita nemo velit blanditiis in impedit
            nulla nobis vel commodi nisi minus! Voluptatum Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Quaerat consequuntur,
            veritatis inventore voluptatibus atque ratione repudiandae
            repellendus, quae quam quo eius! Fugiat quisquam ea ut sunt
            perferendis fuga accusantium eius?
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

          <div className="mt-5">
            <form action="">
              <textarea
                type="text"
                placeholder="type comment..."
                className="textarea textarea-accent lg:w-1/2 w-full"
              />
              <br />
              <input
                type="submit"
                value="Submit"
                className="bg-accent py-2 px-5 rounded-md text-white font-semibold mt-1"
              />
            </form>

            <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="border border-gray-200 shadow-md rounded-md bg-gray-200 px-5 py-2">
                <h1 className="font-bold text-warning">Khalid Hasan</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, obcaecati!
                </p>
              </div>
              <div className="border border-gray-200 shadow-md rounded-md bg-gray-200 px-5 py-2">
                <h1 className="font-bold text-warning">Khalid Hasan</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, obcaecati!
                </p>
              </div>
              <div className="border border-gray-200 shadow-md rounded-md bg-gray-200 px-5 py-2">
                <h1 className="font-bold text-warning">Khalid Hasan</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, obcaecati!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContentDetails;
