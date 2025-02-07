import projectBgImg from '../assets/bulbImage.jpg'
import tictactoeImg from '../assets/tictactoeImage.jpg'
import puffpuffImg from '../assets/puffpuffImage.jpg'
import memeImg from '../assets/memeImage.jpg'
import galleryImg from '../assets/galleryImage.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

function ProjectsPage() {
  const projects = [
    {
      img: puffpuffImg,
      overview: 'Ghanaian Recipes',
      description: 'A collection of traditional Ghanaian recipes and cooking guides',
      link: '',
      status: 'disabled',
      note: 'Coming soon',
    },
    {
      img: memeImg,
      overview: 'Meme Generator',
      description: 'Create and customize memes with this interactive web application',
      link: 'https://mksprojects.netlify.app/memeGene',
      status: 'enabled',
      note: 'Demo',
    },
    {
      img: tictactoeImg,
      overview: 'TicTacTae Game',
      description: 'Classic Tic-tac-toe game with a modern interface',
      link: 'https://mksprojects.netlify.app/',
      status: 'enabled',
      note: 'Demo',
    },
    {
      img: galleryImg,
      overview: 'Image Search',
      description: 'Search and browse high-quality images with advanced filtering',
      link: 'https://mksgallery.netlify.app/',
      status: 'enabled',
      note: 'Demo',
    },
  ]

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 bg-gray-900 bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${projectBgImg}')` }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-300 text-sm sm:text-base" role="doc-subtitle">
            Early & Personal Work
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-12" // Add padding for navigation dots
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <article 
                className="h-full flex flex-col bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-400"
                tabIndex="0"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={project.img}
                    alt={`Screenshot of ${project.overview}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {project.overview}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow" aria-label={`Description for ${project.overview}`}>
                    {project.description}
                  </p>
                  <a
                    href={project.status !== 'disabled' ? project.link : undefined}
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      project.status === 'disabled'
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800'
                    }`}
                    aria-disabled={project.status === 'disabled'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${project.note} - ${project.overview}${project.status === 'disabled' ? ' (Not available yet)' : ''}`}
                  >
                    {project.note}
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProjectsPage
