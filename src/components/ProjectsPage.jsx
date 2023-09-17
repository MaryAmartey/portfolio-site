import React from 'react';
import projectBgImg from '../assets/bulbImage.jpg';
import tictactoeImg from '../assets/tictactoeImage.jpg'
import puffpuffImg from '../assets/puffpuffImage.jpg'
import memeImg from '../assets/memeImage.jpg'
import galleryImg from '../assets/galleryImage.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProjectsPage() {
  const projects=[
    {
      img:puffpuffImg,
      overview:"Ghanaian recipes",
      link:"https://mksgallery.netlify.app/"
    },
    {
        img:memeImg,
        overview:"Meme Generator",
        link:"https://mksprojects.netlify.app/memeGene"
    },
    {
      img:tictactoeImg,
      overview:"TicTacTae Game",
      link: "https://mksprojects.netlify.app/"
  },
    {
      img:galleryImg,
      overview:"Image Search",
      link:"https://mksgallery.netlify.app/"
  },
]
  return (
    <>
       <section id="projects" className="bg-gray-100 dark:bg-gray-900 bg-no-repeat bg-cover bg-left bg-fixed"
                      style={{ backgroundImage: `url('${projectBgImg}')` }} >
              <div className="flex flex-col md:flex-row">
                  <div className="justify-center p-5 m-10 w-1/2">
                          <h1 className="text-6xl md:mt-28 text-orange-300 font-bold">Projects</h1>
                      </div>
              <div class="md:w-1/2 px-12">
              <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                  // when window width is >= 640px
                  560: {
                    width: 560,
                    slidesPerView: 2,
                  },
                }}
            >
                  {
                  projects.map(project=> {
                      return (
                        <SwiperSlide>
                        <div class="max-w-sm border-gray-200 pt-15 pb-10 md:pt-28 sm:pb-16 rounded-lg shadow-md opacity-100">
                          <figure class="cursor-pointer">
                            <img src={project.img} alt="project images" className="rounded-t h-72 w-full object-cover" />
                            <figcaption class="p-4 dark:bg-gray-900 rounded-b dark:border-gray-700 opacity-95 ">
                              <p class="text-lg mb-4 font-bold leading-relaxed dark:text-white-900">
                                {project.overview}
                              </p>
                      
                              <a href={project.link} class="inline-flex items-center my-1 mb-5 px-3 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Demo
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                              </a>
                      
                            </figcaption>
                          </figure>
                        </div>
                      </SwiperSlide>       
                )})
              }
              </Swiper>
          </div>
          </div>
          
      </section>
        
    </>
  );
}

export default ProjectsPage;
