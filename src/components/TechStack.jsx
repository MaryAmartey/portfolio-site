import {
    SiReact,
    SiNodedotjs,
    SiDocker,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiGit,
    SiMysql,
    SiMongodb,
    SiAmazonaws,
    SiFirebase,
  } from 'react-icons/si'
  
  function TechStack() {
    const technologies = [
      { icon: SiReact, name: 'React' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiDocker, name: 'Docker' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiPython, name: 'Python' },
      { icon: SiGit, name: 'Git' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiAmazonaws, name: 'AWS' },
      { icon: SiFirebase, name: 'Firebase' },
    ]
  
    return (
      <section
        id="tech-stack"
        className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A curated collection of modern technologies I use to build robust and scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
              >
                <div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500/50 group-hover:bg-gray-800/70">
                  <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    <tech.icon
                      className="w-12 h-12 relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-gray-300 group-hover:text-white text-center font-medium transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default TechStack