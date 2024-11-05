import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Avatar } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { signOut, user } = UserAuth();

  const navList = (
    <ul className="hidden lg:flex items-center gap-4 text-heading text-lg font-medium ">
      <li className="cursor-pointer text-primary">
        <a href="#how-it-works">How it Works</a>{" "}
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#meals">Meals</a>
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#testimonials">Testimonials</a>
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#pricing">Pricing</a>
      </li>

      {!user ? (
        <Link to="/login">
          <button className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-primary-hover transition duration-500">
            Log In
          </button>
        </Link>
      ) : (
        <button
          onClick={signOut}
          className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-primary-hover transition duration-500"
        >
          Log out
        </button>
      )}

      {user && user.user.app_metadata.provider === "google" ? (
        <div className="flex flex-col items-center text-xs">
          <img
            className="rounded-full w-6 h-6"
            src={user.user.user_metadata.avatar_url}
          />
          <span>Welcome,</span>
          <span>{user.user.user_metadata.name}</span>
        </div>
      ) : user && user.user.app_metadata.provider === "email" ? (
        <div className="flex flex-col items-center text-xs">
          <Avatar />

          <span>Welcome,</span>
          <span>{user.user.email}</span>
        </div>
      ) : (
        ""
      )}
    </ul>
  );

  const navListCollapse = (
    <ul className="flex flex-col items-center gap-3 text-heading text-lg font-medium ">
      <li className="cursor-pointer text-primary">
        {" "}
        <a href="#how-it-works">How it Works</a>
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#meals">Meals</a>
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#testimonials">Testimonials</a>
      </li>
      <li className="cursor-pointer hover:text-primary-hover transition duration-500">
        <a href="#pricing">Pricing</a>
      </li>
      {!user ? (
        <Link to="/login">
          <button className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-primary-hover transition duration-500">
            Log In
          </button>
        </Link>
      ) : (
        <button
          onClick={signOut}
          className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-primary-hover transition duration-500"
        >
          Log out
        </button>
      )}
      {user && user.user.app_metadata.provider === "google" ? (
        <div className="flex flex-col items-center text-xs">
          <img
            className="rounded-full w-6 h-6"
            src={user.user.user_metadata.avatar_url}
          />
          <span>Welcome,</span>
          <span>{user.user.user_metadata.name}</span>
        </div>
      ) : user && user.user.app_metadata.provider === "email" ? (
        <div className="flex flex-col items-center text-xs">
          <Avatar />

          <span>Welcome,</span>
          <span>{user.user.user_metadata.fullName}</span>
        </div>
      ) : (
        ""
      )}
    </ul>
  );

  const handleWindowResize = () => {
    window.innerWidth >= 1024 && setOpenNav(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="flex items-center   ">
      {navList}

      <div className="  z-40   lg:hidden" onClick={() => setOpenNav((f) => !f)}>
        {!openNav ? (
          <DehazeIcon className=" text-primary" />
        ) : (
          <ClearIcon className=" text-primary" />
        )}
      </div>
      <div
        className={`w-full shadow-md   fixed top-0 left-0  transform  ${
          !openNav
            ? " -translate-x-full   "
            : "  transition duration-700  translate-x-0  "
        }  py-10 px-10 bg-slate-50 z-30`}
      >
        {openNav && navListCollapse}
      </div>
    </nav>
  );
};

export default NavBar;
