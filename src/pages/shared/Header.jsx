
import { BsFillChatRightTextFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
  return (
    <section className="py-4 px-4 bg-white/80 shadow-lg mb-10 flex items-center justify-between border border-b-gray-100">
      {/* left side */}
      <div className="flex items-center gap-5">
        <h1 className="text-3xl uppercase text-primary font-bold">
          Socio Sphere
        </h1>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search…"
            className="py-1 px-4 rounded-md bg-inherit border border-gray-600 text-base focus:outline-primary"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center gap-5">
        <BsFillChatRightTextFill className="text-xl" />
        <IoNotifications className="text-xl" />
        <RxDashboard className="text-xl" />
      </div>
    </section>
  );
};

export default Header;
