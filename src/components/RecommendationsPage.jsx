import { useState } from 'react'
import '../styles/App.css'

function RecommendationsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const recommendations = [
    {
      name: 'Jessica Donahue',
      role: 'Senior Software Engineer at Meta',
      date: 'October 4, 2024',
      profileLink: 'https://www.linkedin.com/in/jessica-donahue-826a03114/',
      recommendation: `I had the pleasure of working with Mary during her internship at AKQA in the summer of 2023, and later when she joined full-time for a year. From the moment she arrived, Mary demonstrated an incredible ability to quickly adapt and learn. 
                        Despite having limited web development experience, as she just graduated from college, she rapidly familiarized herself with the stack and the codebase, making significant contributions to client projects even as an intern. 
                        Mary's eagerness to learn and her proactive attitude were evident in everything she did. She continuously sought out new challenges and opportunities to grow, never hesitating to dive into unfamiliar technologies or take on new responsibilities. Her passion for learning and drive to deliver impactful work made her a valuable asset to our team.
                        I'm confident that Mary will continue to excel and thrive in any role she pursues, and I highly recommend her for any team looking for a dedicated and quick-learning full-stack developer!`,
    },
    {
      name: 'João Marcus Fernandes',
      role: 'Staff Software Engineer at Arctouch',
      date: 'September 4, 2024',
      profileLink: 'https://www.linkedin.com/in/joaomarcuslf/',
      recommendation: `I've worked with her for an entire project cycle, and she is an exceptionally talented software engineer. Mary's natural ability to grasp new concepts quickly makes her a fast learner of any new technology or framework she encounters. 
                        Her proactive problem-solving approach and constant eagerness to learn make her an asset to any team. She is also a great colleague who consistently fosters a collaborative and positive work environment. 
                        Mary's talent, ability to learn fast, and proactive attitude ensure that she is always ready to tackle any challenge and be a strong player on the team. Her combination of skills and attitude makes her a standout professional and incredible to work with.`,
    },
    {
      name: 'Shawn Mullings',
      role: 'Software Engineer',
      date: 'August 29, 2023',
      profileLink: 'https://www.linkedin.com/in/shawnmullings/',
      recommendation: `During the past few months of working closely with Mary, it has become evident that she has truly shone as a valuable member of AKQA's "Future Academy" summer immersive internship program. Mary's collaborative spirit, enthusiasm, and open-mindedness have made her a pleasure to work with.
                        One of Mary's standout qualities is her consistent adherence to established coding patterns, resulting in the production of high-quality source code. This attention to detail has enabled her to excel as a software engineer, contributing to the development of multiple digital products.
                        I was particularly impressed by her ability to grasp challenging engineering concepts and apply them to her work.
                        Beyond her technical aptitude, Mary's positive attitude has had a significant impact on the entire engineering team. Her upbeat demeanor and can-do mindset has help her to overcome challenging engineering problems. 
                        In summary, Mary's journey through the "Future Academy" program has showcased her as a skilled and productive software engineer. Her collaborative nature, combined with her technical and interpersonal skills, makes her an asset to any team.`,
    },
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Professional Recommendations
        </h2>
        <div className="space-y-6">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {recommendation.name}
                    </h3>
                    <p className="text-blue-400">{recommendation.role}</p>
                    <p className="text-gray-400 text-sm">{recommendation.date}</p>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {recommendation.recommendation}
                  </p>
                  <a
                    href={recommendation.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>View Profile</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendationsPage
