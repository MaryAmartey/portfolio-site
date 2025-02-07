import React from 'react'
import aboutBgImg from '../assets/darkBubbles.jpg'
import profilePhoto from '../assets/profilePhoto.jpg'

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center pt-20 xs:pt-24 sm:pt-28 md:pt-24 pb-8 px-4"
      style={{ backgroundImage: `url(${aboutBgImg})` }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Photo Container */}
          <div className="w-full flex justify-center mb-6 md:mb-0">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <img
                src={profilePhoto}
                alt="Mary Amartey"
                className="rounded-full object-cover w-full h-full shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-400/50 animate-pulse"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full">
            <div className="relative backdrop-blur-md bg-white/10 p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-white/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Who am I?
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    I am a passionate full-stack developer dedicated to crafting innovative solutions for real-world challenges. With expertise in both front-end and back-end development, I specialize in building efficient, scalable applications that make a difference.
                  </p>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    My journey in tech is driven by an insatiable curiosity for emerging trends and a commitment to continuous learning. I thrive in dynamic environments where I can apply my expertise in modern frameworks and agile methodologies to deliver impactful results.
                  </p>

                  <div className="pt-4 sm:pt-6 border-t border-white/20">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        Mary Amartey
                      </h3>
                      <a
                        href="mailto:maryamartey123@yahoo.com"
                        className="inline-flex items-center text-sm sm:text-base text-white hover:text-blue-300 transition-colors font-medium group"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        maryamartey123@yahoo.com
                      </a>
                      <div className="flex space-x-4 pt-2">
                        <a
                          href="https://www.linkedin.com/in/mary-amartey-0388a9185"
                          className="text-white hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a
                          href="https://github.com/yourusername"
                          className="text-white hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
