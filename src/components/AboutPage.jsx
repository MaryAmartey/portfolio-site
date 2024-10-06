/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutBgImg from "../assets/darkBubbles.jpg";
import profilePhoto from "../assets/profilePhoto.jpg";

function AboutPage() {
  //flex flex-col sm:flex-row w-full items-center justify-center
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 bg-no-repeat bg-cover bg-left bg-fixed flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${aboutBgImg})`, // Removed single quotes around projectBgImg
      }}
    >
      <div className="mt-56 px-2 mb-24 flex flex-col md:mt-20 lg:mt-20 md:flex-row md:w-full items-center justify-center">
        <div className="relative  md:w-full md:max-w-md w-2/5">
          <img
            className="absolute bottom-0 transform translate-y-2/3 md:rounded-lg rounded-full "
            src={profilePhoto}
            alt="profile"
          />
        </div>
        <div className="max-w-md md:mt-44 md:pt-6 pt-36 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-900">
          <h5 className="mb-2 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Who am I as of 2024?
          </h5>
          <div className="divide-y divide-gray-600 ">
            <p className="font-normal pb-3 text-gray-900 dark:text-white">
              Hi! I'm Mary Amartey, a Ghanaian with a newly minted computer
              science degree from Oberlin College. My academic journey led me to
              the world of coding, where I marveled at how computers efficiently
              tackle complex problems. Now, using this foundation, I take on
              real-world challenges, leveraging my diverse background to
              innovate and solve problems creatively.
            </p>

            <div className="px-1 py-2">
              <span className="block text-sm text-gray-900 dark:text-white">
                Mary Amartey
              </span>
              <div className="flex justify-between">
                <span className="block text-sm  text-blue-500 truncate dark:text-blue-600 hover:text-blue-700">
                  maryamartey123@yahoo.com
                </span>
                <div className="pl-4 flex divide-x  socials">
                  <a href="https://www.facebook.com/mary.amartey.528">
                    <svg
                      className="mr-1 w-4 h-4 text-gray-800 hover:text-blue-700 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/mary-amartey-0388a9185">
                    <svg
                      className="w-4 h-4 mx-2 text-gray-800 hover:text-blue-700 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 5.012H0V15h3V5.012Z" />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      className="w-4 h-4 mx-2 text-gray-800 hover:text-blue-700 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
