/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Testimonials() {
  const testimonials = [
    {
      author: 'Polly',
      content:
        'Mary is a hardworker and diligent problem-solver. She works well independently and knows when to ask questions. A valuable asset to any team',
      position: 'Lead Software Engineer',
    },
    {
      author: 'Charles',
      content:
        'Ability to bring ideas to life. Mary excels in implementing ideas through continuous improvement, effectively bridging concept and execution.',
      position: 'Software Engineer',
    },
    {
      author: 'Noemi',
      content:
        'Quick Learner. Mary excels in understanding new and complex concepts with ease. Also familiar with several programming languages',
      position: 'Business Analyst',
    },
    {
      author: 'Anonymous',
      content:
        'An exceptional learner and an even better team player: a collaborator who leverages her vast knowledge to arrive at solutions that benefit the entire team',
      position: 'Anonymous',
    },
  ]
  
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the impact I've made through the words of those I've worked with
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="max-w-4xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
                <svg
                  className="h-12 mx-auto mb-6 text-blue-400/40"
                  viewBox="0 0 24 27"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <blockquote>
                  <p className="text-xl font-medium text-white mb-8">
                    {testimonial.content}
                  </p>
                </blockquote>
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-center">
                    <div className="font-medium text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
