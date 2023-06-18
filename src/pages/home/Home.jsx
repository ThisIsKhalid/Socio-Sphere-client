import LeftSide from "../../components/LeftSide";
import MiddleContent from "../../components/MiddleContent";
import RightSide from "../../components/RightSide";
// import ColorCheck from "../../components/colorCheck";

const Home = () => {
  return (
    <section className="grid lg:grid-cols-7 grid-cols-1 gap-5 px-2">
      <div className="lg:col-span-2">
        <LeftSide />
      </div >
      <div className="lg:col-span-4">
        <MiddleContent />
      </div>
      <div className="lg:col-span-1">
        <RightSide />
      </div>
    </section>
  );
};

export default Home;
