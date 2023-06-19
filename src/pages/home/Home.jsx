import axios from "axios";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import userImg from "../../assets/images/userImg.png";
import LeftSide from "../../components/LeftSide";
import PostContent from "../../components/PostContent";
import RightSide from "../../components/RightSide";
// import ColorCheck from "../../components/colorCheck";

const Home = () => {
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
      // const response = await axios.post("/api/your-endpoint", formData);

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid lg:grid-cols-7 grid-cols-1 gap-5 px-2">
      <div className="lg:col-span-2">
        <LeftSide />
      </div>
      {/* --------middle--------- */}
      <div className="lg:col-span-4">
        <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center mb-5">
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
              className={`border-2 border-dashed py-2 px-2 mt-3 ${
                imageUrl ? "border-warning" : "border-primary"
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <>
                  <div className="flex items-center justify-center">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="Selected"
                        className="rounded w-3/4"
                      />
                    ) : (
                      <>
                        <p>No image selected. Drag & drop image here</p>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary px-3 py-1 rounded-md text-base font-semibold text-slate-900 mt-2 hover:bg-warning hover:text-gray-100 uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <h1 className="text-2xl font-bold text-secondary underline underline-offset-8 bg-white/80 border border-gray-200 shadow-lg rounded-lg px-5 py-5">
          Trending Topic :
        </h1>
        <PostContent />
        <PostContent />
      </div>
      {/* ---------------- */}
      <div className="lg:col-span-1">
        <RightSide />
      </div>
    </section>
  );
};

export default Home;
