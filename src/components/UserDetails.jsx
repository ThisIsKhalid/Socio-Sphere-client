/* eslint-disable react/prop-types */
import axios from "axios";
import { toast } from "react-hot-toast";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineEmail,
  MdOutlineModeEditOutline,
  MdWorkOutline,
} from "react-icons/md";
import userImg from "../assets/images/userImg.png";
import { useEffect, useState } from "react";

const UserDetails = ({ user }) => {
  // console.log(user);
  const [dbUser, setDbUser] = useState({})

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      name: form.name.value,
      location: form.location.value,
      workPlace: form.workplace.value,
      university: form.university.value,
      github: form.github.value,
      twitter: form.twitter.value,
    };

    axios
      .patch(`http://localhost:5000/api/v1/users/${user?.email}`, formData)
      .then((response) => {
        if (response.data.createdAt) {
          toast.success("Profile Updated Successfully");
          window.edit_user.close();
        }
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message)
      });
  };

  // get user from db
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${user?.email}`
        );
        setDbUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [setDbUser, user?.email]);
  // console.log(dbUser);

  return (
    <>
      <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg px-5 py-2 h-[350px] flex flex-col justify-center">
        {/* ------------------- */}
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL ? user.photoURL : userImg}
              alt=""
              className="w-16 rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800 uppercase">
                {user?.displayName}
              </h1>
              <p className="text-gray-500 text-sm">30 friends</p>
            </div>
          </div>
          <div>
            {/* Open the modal using ID.showModal() method */}
            <button className="" onClick={() => window.edit_user.showModal()}>
              <MdOutlineModeEditOutline className="text-xl" />
            </button>
            <dialog id="edit_user" className="modal">
              <form
                method="dialog"
                className="modal-box"
                onSubmit={handleUpdate}
              >
                <div className="mt-5 flex flex-col gap-3">
                  {/* <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    required
                    placeholder="Name"
                    className="input input-bordered input-primary w-full"
                  /> */}
                  <input
                    type="text"
                    name="location"
                    defaultValue={dbUser?.location}
                    required
                    placeholder="Location"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="workplace"
                    defaultValue={dbUser?.workPlace}
                    required
                    placeholder="Work Place"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="university"
                    defaultValue={dbUser?.university}
                    required
                    placeholder="University/College"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="github"
                    defaultValue={dbUser?.github}
                    required
                    placeholder="Github Account"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="twitter"
                    defaultValue={dbUser?.twitter}
                    required
                    placeholder="Twitter Account"
                    className="input input-bordered input-primary w-full"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-gray-100"
                  >
                    Update
                  </button>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>

        {/* -------------------------- */}
        <div className="border-b pb-3 mb-3">
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-lg" />
            <p>{dbUser?.location}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline className="text-lg" />
            <p>
              Works at{" "}
              <span className="font-semibold">{dbUser?.workPlace}</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline className="text-lg" />
            <p>
              Studied at{" "}
              <span className="font-semibold">{dbUser?.university}</span>
            </p>
          </div>
        </div>

        {/* ---------------------------- */}
        <div>
          <h1 className="text-lg font-semibold mb-1 underline underline-offset-4">
            Social Profiles :
          </h1>
          <div className="flex items-center gap-1">
            <MdOutlineEmail className="text-lg" />
            <p>{user?.email}</p>
          </div>
          <div className="flex items-center gap-1">
            <BsGithub className="text-lg" />
            <p>{dbUser?.github}</p>
          </div>
          <div className="flex items-center gap-1">
            <BsTwitter className="text-lg" />
            <p>{dbUser?.twitter}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
