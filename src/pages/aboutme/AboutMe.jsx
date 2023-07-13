import axios from "axios";
import { useEffect, useState } from "react";
import PostContent from "../../components/PostContent";
import UserDetails from "../../components/UserDetails";

const AboutMe = () => {
  const [contents, setContents] = useState([]);

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
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-5 lg:px-20 px-5">
      <div className="lg:col-span-2">
        <UserDetails />
      </div>
      <div className="lg:col-span-4">
        {contents?.map((content) => (
          <PostContent key={content._id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
