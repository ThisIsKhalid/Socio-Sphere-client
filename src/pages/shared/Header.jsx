/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const CustomLink = ({ to, title, className = "" }) => {
    const location = useLocation();
    // console.log(location.pathname);
    // console.log(to);
    return (
      <NavLink
        to={to}
        className={`${className} relative group font-medium text-base text-gray-50 uppercase`}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-error absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
        ${location.pathname === to ? "w-full" : "w-0"}
        `}
        >
          &nbsp;
        </span>
      </NavLink>
    );
  };

  const handleLogout = () => {
    logOut()
    .then(() => toast.success("User logged out !"))
  }

  return (
    <section className="py-4 px-4 bg-white/80 shadow-lg mb-10 flex items-center justify-between border border-b-gray-100">
      {/* left side */}
      <div className="flex items-center gap-5">
        <h1 className="text-3xl uppercase text-primary font-bold">
          Socio Sphere
        </h1>
        <div className="form-control hidden lg:block">
          <input
            type="text"
            placeholder="Search…"
            className="py-1 px-4 rounded-md bg-inherit border border-gray-600 text-base focus:outline-primary"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center gap-5">
        <ul className="lg:flex items-center gap-5 hidden">
          <li className="">
            <CustomLink to="/home" title="Home" className="text-neutral" />
          </li>
          <li className="">
            <CustomLink to="/medias" title="Media" className="text-neutral" />
          </li>
          {user?.email && (
            <>
              <li className="">
                <CustomLink
                  to="/profile"
                  title="Profile"
                  className="text-neutral"
                />
              </li>
            </>
          )}
          {user?.email ? (
            <>
              <li className="" onClick={handleLogout}>
                <CustomLink title="Sign-Out" className="text-neutral" />
              </li>
            </>
          ) : (
            <>
              <li className="">
                <CustomLink
                  to="/signup"
                  title="Sign-UP"
                  className="text-neutral"
                />
              </li>
              <li className="">
                <CustomLink
                  to="/signin"
                  title="Sign-IN"
                  className="text-neutral"
                />
              </li>
            </>
          )}
        </ul>
        <BsFillChatRightTextFill className="text-xl hidden lg:block" />
        <IoNotifications className="text-xl hidden lg:block" />
        <div className="dropdown dropdown-end lg:hidden block">
          <label tabIndex={0} onClick={toggleDropdown}>
            <RxDashboard className="text-xl  hover:animate-spin " />
          </label>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content px-4 py-3 shadow bg-accent rounded-md w-48 mt-6 font-medium"
              onClick={closeDropdown}
            >
              <li className="mb-2">
                <CustomLink to="/home" title="Home" className="text-sm" />
              </li>
              <li className="my-2">
                <CustomLink to="/medias" title="Media" className="text-sm" />
              </li>
              {user?.email && (
                <>
                  <li className="my-2">
                    <CustomLink
                      to="/profile"
                      title="Profile"
                      className="text-sm"
                    />
                  </li>
                </>
              )}
              {user?.email ? (
                <>
                  <li className="mt-2" onClick={handleLogout}>
                    <CustomLink title="Sign-Out" className="text-sm" />
                  </li>
                </>
              ) : (
                <>
                  <li className="my-2">
                    <CustomLink
                      to="/signup"
                      title="Sign-UP"
                      className="text-sm"
                    />
                  </li>
                  <li className="my-2">
                    <CustomLink
                      to="/signin"
                      title="Sign-IN"
                      className="text-sm"
                    />
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
