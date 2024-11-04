import  { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { UserAuth } from "../context/AuthContext";
const LoginForm = () => {
  const { signInWithGoogle, signIn } = UserAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(formData.email, formData.password);

    e.target.reset();
  };

  return (
    <div className="bg-login-img bg-no-repeat bg-cover pt-56 bg-center min-h-screen ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" container  mx-auto px-4  relative z-10 grid justify-center grid-cols-[max-content]    ">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="shadow-xl   bg-section flex flex-col gap-5 px-14 py-10 rounded-2xl "
        >
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-lg" htmlFor="">
              Email
            </label>
            <input
              onChange={handleInputs}
              required
              name="email"
              type="email"
              className="text-sm  shadow-sm inline-block py-4 px-4 rounded-xl  focus:outline-none  focus:ring-2 focus:ring-orange-600 sm:text-base "
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mb-2 font-semibold text-lg">
              Password
            </label>
            <input
              onChange={handleInputs}
              required
              name="password"
              type="password"
              className=" text-sm shadow-sm inline-block py-4 px-4 rounded-xl focus:outline-none  focus:ring-2 focus:ring-orange-600 sm:text-base"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col justify-end ">
            <button
              onClick={signIn}
              type="submit"
              name="login"
              className="bg-tertiary text-sm text-section  w-1/2 self-center  px-5 py-2 rounded-xl text-sectionfont-semibold hover:text-section hover:opacity-90 sm:text-base "
            >
              Login
            </button>
            <span className=" self-center text-center mt-4 rounded-full bg-white p-3">
              OR
            </span>
            <button
              onClick={signInWithGoogle}
              type="button"
              name="google"
              className="mt-3   text-center self-center px-5 flex flex-col justify-center items-center gap-2 rounded-xl bg-white py-2 shadow-md cursor-pointer hover:bg-gray-100 sm:flex-row sm:text-base"
            >
              <GoogleIcon className="text-primary" />
              <span className="text-sm sm:text-base ">Sign in with Google</span>
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
