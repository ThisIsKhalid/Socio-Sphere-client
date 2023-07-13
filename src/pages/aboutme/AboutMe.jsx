import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PostContent from "../../components/PostContent";
import UserDetails from "../../components/UserDetails";
import { AuthContext } from "../../context/AuthProvider";

const AboutMe = () => {
  const [contents, setContents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/contents/my-contents/?email=${user?.email}`
        );
        setContents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContents();
  }, [user?.email]);

  

  
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-5 lg:px-20 px-5">
      <div className="lg:col-span-2">
        <UserDetails user={user} />
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
