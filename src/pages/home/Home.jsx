import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-hot-toast";
import userImg from "../../assets/images/userImg.png";
import Advertise from "../../components/Advertise";
import PostContent from "../../components/PostContent";
// import ColorCheck from "../../components/colorCheck";

const Home = () => {
  const [contents, setContents] = useState([]);
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
    const form = e.target;
    const text = form.text.value;


    if (text || file) {
      try {
        let imageUrl = null;
        if(file) {
          const formData = new FormData();
          formData.append("image", file);

          const imageUploadResponse = await axios.post(
            "https://api.imgbb.com/1/upload?key=4e6182c8cb621e9c45518eeee1921456",
            formData
          );
          imageUrl = imageUploadResponse.data.data.url;
        }

        const content = {
          text,
          img: imageUrl,
        };
        // console.log(content);

        // eslint-disable-next-line no-unused-vars
        const response = await axios.post(
          "http://localhost:5000/api/v1/contents/create-content",
          content
        );

        // console.log(response.data);
        toast.success('Post Uploaded !')
        form.reset();
        setFile(null);
        setImageUrl(null);
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Please write text or image !");
    }
  };

  useEffect(() => {
    // Fetch contents from the server
    const fetchContents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/contents"
        );
        setContents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContents();
  }, [file]);

  return (
    <section className="grid lg:grid-cols-5 grid-cols-1 gap-10 lg:px-20 px-5">
      {/* --------left--------- */}
      <div className="lg:col-span-4">
        <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg p-5 flex flex-col justify-center mb-5">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-5">
              <img src={userImg} alt="" className="w-16 rounded-full" />
              <textarea
              name="text"
                className=" w-full rounded-3xl px-4 py-2 bg-inherit border border-secondary focus:outline-primary focus:border-none"
                placeholder="What's on your mind..."
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
                className="btn btn-sm btn-primary mt-2 hover:btn-warning"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <h1 className="text-2xl font-bold text-secondary underline underline-offset-8 bg-white/80 border border-gray-200 shadow-lg rounded-lg px-5 py-5">
          Trending Topics :
        </h1>
        {contents?.map((content) => (
          <PostContent key={content._id} content={content} />
        ))}
      </div>
      {/* ------right---------- */}
      <div className="lg:col-span-1">
        <Advertise />
      </div>
    </section>
  );
};

export default Home;
