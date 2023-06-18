import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="border border-gray-100 lg:w-1/2 flex flex-col items-center bg-white/80 shadow-lg rounded-lg py-10 mx-5">
        <h1 className="text-7xl font-bold text-accent">Hi There !</h1>
        <p className="text-lg px-5 text-center">
          Welcome back Cheif. Let&#39;s start hunting 😉
        </p>

        <div className="lg:w-3/4 w-[90%] mt-10">
          <button className="flex items-center justify-center gap-2 text-lg text-neutral font-semibold w-full py-3 bg-success/60 rounded-2xl">
            <FcGoogle className="text-2xl" /> Signin with Google
          </button>

          <div className="flex items-center justify-center gap-5">
            <div className="w-40 h-[1px] bg-gray-300"></div>
            <p className="my-10 text-xl">or</p>
            <div className="w-40 h-[1px] bg-gray-300"></div>
          </div>

          <form className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="input w-full bg-success/80 focus:outline-warning text-neutral font-semibold text-lg text-center placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full bg-success/80 focus:outline-warning text-neutral font-semibold text-lg text-center placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
            />
            <button
              type="submit"
              className="mt-10 py-4 bg-neutral rounded-md text-gray-50 hover:text-neutral uppercase font-semibold text-base hover:bg-error transition-colors ease-in-out duration-300 delay-75"
            >
              Sign-In
            </button>
          </form>
          <p className="text-center mt-5">
            Don&#39;t have an account ?{" "}
            <Link
              to="/signup"
              className="text-info font-bold underline underline-offset-4"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
