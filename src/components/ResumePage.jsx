import '../styles/App.css'
import CV from '../assets/resumePDF/Mary_Amartey_Resume.pdf'

function ResumePage() {
  return (
    <section id="resume" className="resumePage page-width-wrapper pt-10">
      <ol className="relative border-l border-blue-200 dark:border-blue-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-200"></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-600">
            Relevant Experience
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
            Boost your curiosity and my job prospects – Get my resume now!
          </p>
          <a
            href={CV}
            download
            className="bg-blue-800 inline-flex items-center px-4 py-2 text-sm font-medium text-white-900 border border-blue-200 rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-200 focus:text-blue-200 text-white border-blue-600 hover:text-white hover:bg-blue-600 focus:ring-blue-200"
          >
            Resume{' '}
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-2 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2023 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Associate Developer at AKQA
          </h3>
        </li>
        <li className="mb-10 ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2023 - August 2023
          </time>
          <h3 className="text-md font-semibold text-gray-900 dark:text-white">
            Technology Intern at AKQA
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Technologies acquired from this experience: React.js, Node.js,
            Express, Websocket, React-native, CMS-Strapi, Langchain, Postman.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022 - December 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Junior Full Stack Developer at Codyssia Software
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Technologies acquired from this experience: PHP with Laravel,
            Vue.js, Firebase, MySQL, and TablePlus.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-800"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2020 - August 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Research Assitant at Oberlin College Computer Science Department
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Working in a team researched successful strategies for retaining
            students in Introductory Computer Science classes, which were
            utilized to shape the syllabus for the subsequent academic year
          </p>
        </li>
      </ol>
    </section>
  )
}

export default ResumePage
