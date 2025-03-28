import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import JournalismLogo from "../../public/assets/JournalismLogo.png";

const links = ["home", "school news", "student profiles", "special segments", "staff"];
const linksSmall = [
  "home",
  "staff",
];
const social = [];

const Nav = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const place = useLocation();
  const address = place.pathname
    .replace(/^\/+/, "") 
    .replace(/%20/g, " ");

  return (
    <nav className="sm:py-2 pl-8 border-b-2 border-red bg-beige drop-shadow-2xl shadow-red z-50 ">
      <div className="w-full flex items-center flex-col md:flex-row">
        <div>
          <img
            src={JournalismLogo}
            alt=""
            className="sm:w-[250px] w-[175px] block"
          />
        </div>
        <div className="text-center mx-auto">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-titleFont justify-self-center">
            The ASTI Phoenix
          </h1>
          <div className="flex justify-center gap-8 mt-4">
            {(isWideScreen ? links : linksSmall).map((item, index) => (
              <div key={index}>
                <Link
                  to={item}
                  className={`font-serif ${
                    address === item ? "text-gray-500" : ""
                  } hover:text-gray-500 transition-all duration-200 capitalize`}
                >
                  {item}
                </Link>
              </div>
            ))}
            <a
              href="https://www.instagram.com/astijournalism/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 transition-all duration-200 ml-2"
            >
              <i className="fab fa-instagram text-2xl"></i>{" "}
              {/* Instagram Icon */}
            </a>

            <a
              href="https://www.youtube.com/@ASTIPhoenix"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-500 transition-all duration-200"
            >
              <i className="fab fa-youtube text-2xl"></i> {/* YouTube Icon */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
