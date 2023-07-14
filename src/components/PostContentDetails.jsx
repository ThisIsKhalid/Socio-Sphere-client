import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillHeartFill, BsHeart, BsPersonAdd } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import userImg from "../assets/images/userImg.png";
import { AuthContext } from "../context/AuthProvider";
import { LovedCountContext } from "../context/LovedCountProvider";

const PostContentDetails = () => {
  const { user } = useContext(AuthContext);
  const { lovedCounts, fetchLovedCount, updateLovedCount } =
    useContext(LovedCountContext);
  let { id } = useParams();
  const [content, setContent] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loved, setLoved] = useState(false);
  const lovedCount = lovedCounts[id] || 0;

  const handleLove = async () => {
    const updatedLoved = !loved;
    const newLovedCount = updatedLoved ? lovedCount + 1 : lovedCount - 1;

    try {
      await updateLovedCount(id, newLovedCount);
      setLoved(updatedLoved);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://socio-sphere-server-nine.vercel.app/api/v1/comments`,
        {
          email: user?.email,
          name: user?.displayName,
          postId: id,
          text: newComment,
        }
      );

      const newCommentData = response.data;
      setComments([...comments, newCommentData]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `https://socio-sphere-server-nine.vercel.app/api/v1/contents/${id}`
        );

        setContent(response.data);
        fetchLovedCount(id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, [id, fetchLovedCount]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://socio-sphere-server-nine.vercel.app/api/v1/comments?postId=${id}`
        );
        const commentsData = response.data;
        setComments(commentsData);
        console.log(commentsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [id]);

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
          <p>{content.text}</p>

          <img src={content.img} alt="" className="mt-3 rounded" />

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
              <Link to="/post-details">
                <BiCommentDetail />
              </Link>
            </button>
            <button className="text-2xl">
              <TbShare3 />
            </button>
          </div>

          <div className="mt-5">
            <form onSubmit={handleCommentSubmit}>
              <textarea
                type="text"
                placeholder="type comment..."
                className="textarea textarea-accent lg:w-1/2 w-full"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <br />
              <input
                type="submit"
                value="Submit"
                className="btn btn-sm btn-primary hover:btn-error mt-1"
              />
            </form>

            <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
              {Array.isArray(comments) ? (
                <>
                  {comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="border border-gray-200 shadow-md rounded-md bg-gray-200 px-5 py-2"
                    >
                      <h1 className="font-bold text-warning">{comment.name}</h1>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </>
              ) : (
                <p>No comments available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContentDetails;
