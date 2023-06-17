import LeftSide from "../../components/LeftSide";
import MiddleContent from "../../components/MiddleContent";
import RightSide from "../../components/RightSide";
// import ColorCheck from "../../components/colorCheck";

const Home = () => {
  return (
    <section className="grid grid-cols-7 gap-5 px-2">
      {/* <ColorCheck /> */}
      <LeftSide />
      <MiddleContent />
      <RightSide />
    </section>
  );
};

export default Home;
