import "../styles/App.css";

function RecommendationsPage() {
  const recommendations = [
    {
      name: "Jessica Donahue",
      role: "Senior Software Engineer at Meta",
      date: "October 4, 2024",
      profileLink: "https://www.linkedin.com/in/jessica-donahue-826a03114/",
      recommendation: `I had the pleasure of working with Mary during her internship at AKQA in the summer of 2023, and later when she joined full-time for a year. From the moment she arrived, Mary demonstrated an incredible ability to quickly adapt and learn. 
                        Despite having limited web development experience, as she just graduated from college, she rapidly familiarized herself with the stack and the codebase, making significant contributions to client projects even as an intern. 
                        Mary’s eagerness to learn and her proactive attitude were evident in everything she did. She continuously sought out new challenges and opportunities to grow, never hesitating to dive into unfamiliar technologies or take on new responsibilities. Her passion for learning and drive to deliver impactful work made her a valuable asset to our team.
                        I’m confident that Mary will continue to excel and thrive in any role she pursues, and I highly recommend her for any team looking for a dedicated and quick-learning full-stack developer!`,
    },
    {
      name: "João Marcus Fernandes",
      role: "Staff Software Engineer at Arctouch",
      date: "September 4, 2024",
      profileLink: "https://www.linkedin.com/in/joaomarcuslf/",
      recommendation: `I've worked with her for an entire project cycle, and she is an exceptionally talented software engineer. Mary's natural ability to grasp new concepts quickly makes her a fast learner of any new technology or framework she encounters. 
                        Her proactive problem-solving approach and constant eagerness to learn make her an asset to any team. She is also a great colleague who consistently fosters a collaborative and positive work environment. 
                        Mary's talent, ability to learn fast, and proactive attitude ensure that she is always ready to tackle any challenge and be a strong player on the team. Her combination of skills and attitude makes her a standout professional and incredible to work with.
                        I've worked with her for an entire project cycle, and she is an exceptionally talented software engineer. Mary's natural ability to grasp new concepts quickly makes her a fast learner of any new technology or framework she encounters.
                        Her proactive problem-solving approach and constant eagerness to learn make her an asset to any team. She is also a great colleague who consistently fosters a collaborative and positive work environment.
                        Mary's talent, ability to learn fast, and proactive attitude ensure that she is always ready to tackle any challenge and be a strong player on the team. Her combination of skills and attitude makes her a standout professional and incredible to work with.`,
    },
    {
      name: "Shawn Mullings",
      role: "",
      date: "August 29, 2023",
      profileLink: "https://www.linkedin.com/in/shawnmullings/",
      recommendation: `During the past few months of working closely with Mary, it has become evident that she has truly shone as a valuable member of AKQA's "Future Academy" summer immersive internship program. Mary's collaborative spirit, enthusiasm, and open-mindedness have made her a pleasure to work with.
                        One of Mary's standout qualities is her consistent adherence to established coding patterns, resulting in the production of high-quality source code. This attention to detail has enabled her to excel as a software engineer, contributing to the development of multiple digital products.
                        I was particularly impressed by her ability to grasp challenging engineering concepts and apply them to her work.
                        Beyond her technical aptitude, Mary's positive attitude has had a significant impact on the entire engineering team. Her upbeat demeanor and can-do mindset has help her to overcome challenging engineering problems. 
                        In summary, Mary's journey through the "Future Academy" program has showcased her as a skilled and productive software engineer. Her collaborative nature, combined with her technical and interpersonal skills, makes her an asset to any team.`,
    },
  ];
  return (
    <section className="my-5 lg:my-10 bg-black-200 dark:bg-black-900 antialiased">
      <div className="page-width-wrapper px-4 bg-gray-900 border border-gray-600 rounded-xl shadow py-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          Recommendations
        </h2>
        {recommendations.map((recommendation, index) => {
          return (
            <article
              key={index}
              className="paragraph-styling pt-8 pb-2 mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
            >
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <div>
                      <a
                        href={recommendation.profileLink}
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {recommendation.name}
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-200">
                        {recommendation.role}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-200">
                        <time dateTime="2022-02-08" title="February 8th, 2022">
                          {recommendation.date}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
              </header>
              
              <p className="lead dark:text-white">
                {recommendation.recommendation}
              </p>

              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    className="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default RecommendationsPage;
