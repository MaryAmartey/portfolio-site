import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../styles/App.css";
import gsap from "gsap";

function Navigation(props) {
  const location = useLocation();
  console.log(location);
  const { section } = useParams();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.hash);
  }, [location.hash]);

  let scrollTimeout;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(currentScrollPos <= prevScrollPos);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the timeout duration as needed
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    scrollToSection(section);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [section]);

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    // Add initial CSS for the navbar
    gsap.set("nav", { y: "0%" });
    t1.fromTo("nav", { y: "-100%" }, { y: isVisible ? "0%" : "-100%" });
  }, [isVisible]);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    // Add initial CSS for the navbar

    gsap.set("nav", { y: "0%" });
    t1.fromTo("nav", { y: "-100%" }, { y: "0%" });
  }, []);

  return (
    // eslint-disable-next-line react/prop-types
    <nav
      className={`${props.color} ${section === "about" ? "bg-transparent" : ""}`}
    >
      <div className="max-w-screen-xl relative p-4 flex flex-wrap items-center justify-between mx-auto ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>
        <div className="">
          <div
            className="mx-2 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-full"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Mary Amartey
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                maryamartey123@yahoo.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    activeLink == ""
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-black"
                      : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/content#about"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    activeLink == "#about"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-black"
                      : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/content#resume"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    activeLink == "#resume"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-black"
                      : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/content#projects"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    activeLink == "#projects"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-black"
                      : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/content#testimonials"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    activeLink == "#testimonials"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-black"
                      : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() => {
              const dropdown = document.getElementById("user-dropdown");
              dropdown.classList.toggle("hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className="hidden w-full md:flex md:w-auto" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
            <li>
              <a
                href="/"
                className={`block py-2 pl-3 pr-4 ${
                  activeLink == ""
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : " text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/content#about"
                className={`block py-2 pl-3 pr-4 ${
                  activeLink == "#about"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : " text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/content#resume"
                className={`block py-2 pl-3 pr-4 ${
                  activeLink == "#resume"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : " text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/content#projects"
                className={`block py-2 pl-3 pr-4 ${
                  activeLink == "#projects"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : " text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/content#testimonials"
                className={`block py-2 pl-3 pr-4 ${
                  activeLink == "#testimonials"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : " text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
