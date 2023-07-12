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
    <div className="lg:w-3/4 w-full px-5 mx-auto">
      <UserDetails />
      {contents?.map((content) => (
        <PostContent key={content._id} content={content} />
      ))}
    </div>
  );
};

export default AboutMe;
