import { BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import userImg from "../assets/images/userImg.png";
import { useEffect, useState } from "react";
import axios from "axios";

const PostContentDetails = () => {
  let  {id} = useParams();
  const [content,setContent] = useState({})

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/contents/${id}`
        );

        setContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, [id]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleItemClick = (item) => {
      console.log(`Clicked ${item}`);
    };
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
            {content.text}
          </p>

          <img src={content.img} alt="" className="mt-3 rounded" />

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
                className="btn btn-sm btn-primary hover:btn-error mt-1"
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
