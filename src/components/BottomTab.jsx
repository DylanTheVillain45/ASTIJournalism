import React, { useEffect, useState } from "react";
import JournalismLogo from "../../public/assets/JournalismLogo.png";
import { Link } from "react-router-dom";
const links = [
  "home",
  "school news",
  "student profiles",
  "special segments",
  "staff",
];
const linksSmall = ["home", "staff"];

const BottomTab = () => 
  {const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" bg-red rounded-t-xl py-8 relative">
      <div className="flex flex-row items-center w-full justify-center gap-8">
        {(isWideScreen ? links : linksSmall).map((item, index) => (
          <div className="" key={index}>
            <Link
              to={item}
              className="text-white text-2xl hover:text-slate-300 duration-300 transition-all capitalize"
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-4">
        <div
          className="text-white text-2xl hover:text-slate-300 duration-300 transition-all capitalize cursor-pointer justify-center font-bold"
          onClick={scrollToTop}
        >
          Back To Top{" "}
          <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-4 gap-10">
        <a
          href="https://www.instagram.com/astijournalism/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-slate-300 transition-all duration-200 ml-2 text-white "
        >
          <i className="fab fa-instagram text-5xl"></i> 
        </a>

        <a
          href="https://www.youtube.com/@ASTIPhoenix"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-slate-300 transition-all duration-200 text-white"
        >
          <i className="fab fa-youtube text-5xl"></i>
        </a>
      </div>
      <img
        src={JournalismLogo}
        alt=""
        className="md:block absolute w-30 hidden bottom-2 right-2 md:right-10"
      />
      {/* <img src={JournalismLogo} alt="" className="block sm:hidden w-[200px] mx-auto" /> */}
    </div>
  );
};

export default BottomTab;
