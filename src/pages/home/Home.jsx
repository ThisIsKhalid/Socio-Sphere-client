import LeftSide from "../../components/LeftSide";
import MiddleContent from "../../components/MiddleContent";
import RightSide from "../../components/RightSide";
// import ColorCheck from "../../components/colorCheck";

const Home = () => {
  return (
    <section className="grid lg:grid-cols-7 grid-cols-1 gap-5 px-2">
      <LeftSide />
      <MiddleContent />
      <RightSide />
    </section>
  );
};

export default Home;
