import { BsGithub, BsPersonAdd, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineEmail,
  MdOutlineModeEditOutline,
  MdWorkOutline,
} from "react-icons/md";
import userImg from "../assets/images/userImg.png";

const UserDetails = () => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      name: form.name.value,
      location: form.location.value,
      workplace: form.workplace.value,
      university: form.university.value,
      github: form.github.value,
      twitter: form.twitter.value,
    };

    console.log(formData);
    window.edit_user.close();
  };

  return (
    <>
      <div className="bg-white/80 border border-gray-200 shadow-lg rounded-lg px-5 py-2 h-[350px] flex flex-col justify-center">
        {/* ------------------- */}
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <img src={userImg} alt="" className="w-16 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 uppercase">
                Khalid Hasan
              </h1>
              <p className="text-gray-500 text-sm">30 friends</p>
            </div>
          </div>
          <div>
            {/* <BsPersonAdd className="text-xl" /> */}

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
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Location"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="workplace"
                    required
                    placeholder="Work Place"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="university"
                    required
                    placeholder="University/College"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="github"
                    required
                    placeholder="Github Account"
                    className="input input-bordered input-primary w-full"
                  />
                  <input
                    type="text"
                    name="twitter"
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
            <p>Dinajpur , Bangladesh</p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline className="text-lg" />
            <p>
              Works at <span className="font-semibold">Brain Station 23</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline className="text-lg" />
            <p>
              Studied at{" "}
              <span className="font-semibold">Dinajpur Govt College</span>
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
            <p>admin@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <BsGithub className="text-lg" />
            <p>ThisIsKhalid</p>
          </div>
          <div className="flex items-center gap-1">
            <BsTwitter className="text-lg" />
            <p>Khalid_Hasan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
