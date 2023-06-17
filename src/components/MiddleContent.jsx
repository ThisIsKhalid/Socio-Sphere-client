import userImg from "../assets/images/userImg.png";

const MiddleContent = () => {
  return (
    <div className="col-span-4">
      <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center">
        <div className="flex items-center gap-5">
          <img src={userImg} alt="" className="w-16 rounded-full" />
          <textarea
            className=" w-full rounded-3xl px-4 py-2 bg-inherit border border-secondary focus:outline-primary focus:border-none"
            placeholder="What's on your mind..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
