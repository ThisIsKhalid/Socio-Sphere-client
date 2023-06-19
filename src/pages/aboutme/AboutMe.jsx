import PostContent from "../../components/PostContent";
import UserDetails from "../../components/UserDetails";

const AboutMe = () => {
  return (
    <div className="lg:w-3/4 w-full px-5 mx-auto">
      <UserDetails />
      <PostContent />
    </div>
  );
};

export default AboutMe;
