import axios from "axios";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiCommentDetail } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import userImg from "../assets/images/userImg.png";
import your_name from "../assets/images/your_name.jpg";

const MiddleContent = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(text, file);
    try {
      const formData = new FormData();
      formData.append("text", text);
      formData.append("file", file);
      // console.log(formData);
      const response = await axios.post("/api/your-endpoint", formData);

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5">
            <img src={userImg} alt="" className="w-16 rounded-full" />
            <textarea
              className=" w-full rounded-3xl px-4 py-2 bg-inherit border border-secondary focus:outline-primary focus:border-none"
              placeholder="What's on your mind..."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          {/* --------- */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-primary py-2 px-2 mt-3"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center justify-center ${imageUrl ? 'w-1/2': 'w-full'}`}>
                    <p className=" text-gray-400">
                      {file ? (
                        <span className="font-bold text-neutral">
                          {file.name}
                        </span>
                      ) : (
                        <span>No image selected. Drag & drop image here</span>
                      )}
                    </p>
                  </div>
                  {imageUrl && (
                    <div className={`${imageUrl ? "w-1/2 flex items-center justify-center" : "w-0"}`}>
                      <img src={imageUrl} alt="Selected" className="rounded w-52" />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="mt-5 bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={userImg} alt="" className="w-12 rounded-full" />
            <div>
              <h1 className="text-base font-bold text-gray-800">
                Khalid Hasan
              </h1>
              <p className="text-xs">Dhaka,Bangladesh</p>
            </div>
          </div>
          <div>
            <BsPersonAdd className="text-xl" />
          </div>
        </div>

        {/* -----POSTS----- */}
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            possimus suscipit non. Expedita nemo velit blanditiis in impedit
            nulla nobis vel commodi nisi minus! Voluptatum....{" "}
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
      </div>
    </div>
  );
};

export default MiddleContent;
