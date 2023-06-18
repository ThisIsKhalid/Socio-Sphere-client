import LeftSide from "../../components/LeftSide";
import MiddleContent from "../../components/MiddleContent";


const Profile = () => {
    return (
      <>
        <section className="grid lg:grid-cols-6 grid-cols-1 gap-5 px-2">
          <div className="lg:col-span-2">
            <LeftSide />
          </div>
          <div className="lg:col-span-4">
            <MiddleContent />
          </div>
        </section>
      </>
    );
};

export default Profile;