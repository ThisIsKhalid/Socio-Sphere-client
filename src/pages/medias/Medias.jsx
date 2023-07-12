
import { useEffect, useState } from "react";
import PostContent from "../../components/PostContent";
import axios from "axios";

const Medias = () => {
  const [contents, setContents] = useState([])

  useEffect(() => {
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
