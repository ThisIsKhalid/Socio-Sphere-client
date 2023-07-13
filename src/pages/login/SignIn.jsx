import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import { saveUserInDB } from "../../utils/saveUserInDb";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, googleSignIn } = useContext(AuthContext);

    const handleSignIn = (data, e) => {
      // console.log(data);
      const {email, password } = data;

      logIn(email, password)
        .then(() => {
          toast.success("User Logged in successfully.")
          e.target.reset();
        })
        .catch(() => {
          toast.error("Sign In failed.");
        });
    };

    const handleGoogleSignin = () => {
      googleSignIn()
        .then((res) => {
          const user = res.user;
          saveUserInDB(user.displayName, user.email);
        })
        .catch(() => toast.error("Error saving user."));
    };

  return (
    <section className="flex items-center justify-center">
      <div className="border border-gray-100 lg:w-[40%] flex flex-col items-center bg-white/80 shadow-lg rounded-lg py-10 mx-5">
        <h1 className="text-6xl font-bold text-accent">Hi There !</h1>
        <p className="text-lg px-5 text-center">
          Welcome back Cheif. Let&#39;s start hunting 😉
        </p>

        <div className="lg:w-3/4 w-[90%] mt-10">
          <button
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-2 text-lg text-neutral font-semibold w-full py-3 bg-success/60 rounded-2xl"
          >
            <FcGoogle className="text-2xl" /> Signin with Google
          </button>

          <div className="flex items-center justify-center gap-5">
            <div className="w-40 h-[1px] bg-gray-300"></div>
            <p className="my-5 text-xl">or</p>
            <div className="w-40 h-[1px] bg-gray-300"></div>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-5"
          >
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input w-full bg-success/80 focus:outline-warning text-neutral font-semibold text-lg text-center placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
            />
            {errors.email && (
              <span className="text-error">This field is required ☝</span>
            )}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="input w-full bg-success/80 focus:outline-warning text-neutral font-semibold text-lg text-center placeholder:text-gray-500 placeholder:font-normal placeholder:text-base"
            />
            {errors.password && (
              <span className="text-error">This field is required ☝</span>
            )}

            <input
              type="submit"
              value="Sign In"
              className=" py-4 bg-neutral rounded-md text-gray-50 hover:text-neutral uppercase font-semibold text-base hover:bg-error transition-colors ease-in-out duration-300 delay-75"
            />
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
