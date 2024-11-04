import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
const SignUpForm = () => {
  const { signUp } = UserAuth();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    category: "starter",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value.trim() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(
      formData.fullName,
      formData.email,
      formData.password,
      formData.category
    );
    setShowModal(true);
    e.target.reset();
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-3 bg-primary rounded-xl overflow-hidden">
          <div className="lg:col-start-1 lg:col-span-2 pt-12 pb-16 px-16 flex flex-col gap-4 lg:gap-12 order-2 lg:order-1">
            <h2 className="text-5xl font-semibold">
              Get your first meal for free!
            </h2>
            <p className="text-lg leading-loose">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-4 lg:gap-12"
            >
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-lg" htmlFor="">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  minLength={3}
                  onChange={handleChange}
                  className="inline-block py-4 px-4 rounded-xl  focus:outline-none  focus:ring-2 focus:ring-orange-600 "
                  placeholder="Enter your full name here"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="mb-2 font-semibold">
                  Choose your Plan
                </label>
                <select
                  required
                  onChange={handleChange}
                  name="category"
                  className="inline-block py-4 px-4 rounded-xl focus:outline-none  focus:ring-2 focus:ring-orange-600"
                >
                  <option disabled>Please choose One</option>
                  <option value="starter">Starter</option>
                  <option value="complete">Complete</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="mb-2 font-semibold text-lg">
                  Email address
                </label>
                <input
                  required
                  onChange={handleChange}
                  minLength={6}
                  type="email"
                  name="email"
                  className="inline-block py-4 px-4 rounded-xl focus:outline-none  focus:ring-2 focus:ring-orange-600 "
                  placeholder="Enter your full name here"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="mb-2 font-semibold text-lg">
                  Password
                </label>
                <input
                  required
                  minLength={8}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="inline-block py-4 px-4 rounded-xl focus:outline-none  focus:ring-2 focus:ring-orange-600 "
                  placeholder="Enter your email here"
                />
              </div>

              <div className="flex flex-col justify-end ">
                <button
                  type="submit"
                  className="bg-tertiary py-4 px-4 rounded-xl text-section font-semibold hover:text-black hover:bg-white  "
                >
                  Sign up now
                </button>
              </div>
              {showModal && (
                <div className=" z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">
                      Sign Up Successful!
                    </h2>
                    <p className="mb-4">
                      Thanks for signing up, please verify your email to confirm
                      your SignUp.
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-hover duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="bg-form-img py-48 md:py-60 bg-cover lg:bg-cover bg-no-repeat bg-center opacity-60 order-1  lg:order-2  "></div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
