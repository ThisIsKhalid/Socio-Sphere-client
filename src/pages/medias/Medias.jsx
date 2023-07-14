import axios from "axios";
import { useEffect, useState } from "react";
import PostContent from "../../components/PostContent";

const Medias = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get(
          "https://socio-sphere-server-nine.vercel.app/api/v1/contents"
        );
        setContents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-3/4 px-5">
        {contents?.map((content) => (
          <PostContent key={content._id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Medias;
