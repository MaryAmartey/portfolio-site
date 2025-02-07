import '../styles/App.css'
import CV from '../assets/resumePDF/Mary_Amartey_Resume.pdf'

function ResumePage() {
  return (
    <section id="resume" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <ol className="relative border-l border-blue-400/30">
          <li className="mb-12 ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
              Relevant Experience
            </h2>
            <p className="mb-4 text-gray-300">
              Boost your curiosity and my job prospects – Get my resume now!
            </p>
            <a
              href={CV}
              download
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-green-400 rounded-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Download Resume
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                />
              </svg>
            </a>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal text-gray-400">
              September 2023 - Present
            </time>
            <h3 className="text-xl font-semibold text-white">
              Associate Developer at AKQA
            </h3>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal text-gray-400">
              June 2023 - August 2023
            </time>
            <h3 className="text-lg font-semibold text-white">
              Technology Intern at AKQA
            </h3>
            <p className="text-gray-300">
              Technologies acquired: React.js, Node.js, Express, Websocket,
              React-native, CMS-Strapi, Langchain, Postman
            </p>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal text-gray-400">
              June 2022 - December 2022
            </time>
            <h3 className="text-lg font-semibold text-white">
              Junior Full Stack Developer at Codyssia Software
            </h3>
            <p className="text-gray-300">
              Technologies acquired: PHP with Laravel, Vue.js, Firebase, MySQL,
              and TablePlus
            </p>
          </li>

          <li className="ml-6">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <time className="mb-1 text-sm font-normal text-gray-400">
              July 2020 - August 2020
            </time>
            <h3 className="text-lg font-semibold text-white">
              Research Assistant at Oberlin College Computer Science Department
            </h3>
            <p className="text-gray-300">
              Researched successful strategies for retaining students in
              Introductory Computer Science classes, which were utilized to
              shape the syllabus for the subsequent academic year
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default ResumePage
