import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  const [bg, setBg] = useState(false);

  const handlePos = () => {
    window.scrollY >= 620 ? setBg(true) : setBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePos);

    return () => {
      window.removeEventListener("scroll", handlePos);
    };
  }, []);

  return (
    <header
      className={`flex justify-between px-12 py-6  ${
        !bg
          ? "bg-section"
          : "bg-slate-50 shadow-md transition ease-out duration-500"
      }  items-center w-full sticky top-0 z-50   `}
    >
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
