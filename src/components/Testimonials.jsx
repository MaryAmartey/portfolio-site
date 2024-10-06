/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonials() {
  const testimonials = [
    {
      author: "Polly",
      content:
        "Mary is a hardworker and diligent problem-solver. She works well independently and knows when to ask questions. A valuable asset to any team",
      position: "Lead Software Engineer",
    },
    {
      author: "Charles",
      content:
        "Ability to bring ideas to life. Mary excels in implementing ideas through continuous improvement, effectively bridging concept and execution.",
      position: "Software Engineer",
    },
    {
      author: "Noemi",
      content:
        "Quick Learner. Mary excels in understanding new and complex concepts with ease. Also familiar with several programming languages",
      position: "Business Analyst",
    },
    {
      author: "Anoymous",
      content:
        "An exceptional learner and an even better team player: a collaborator who leverages her vast knowledge to arrive at solutions that benefit the entire team",
      position: "Anoymous",
    },
  ];
  return (
    <>
      <section id="testimonials" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Discover the impact I've made through the words of those I've
              worked with. Explore heartfelt testimonials from individuals who
              have experienced my dedication, expertise, and commitment
              firsthand.
            </p>
          </div>
        </div>
      </section>

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
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <section className="bg-white dark:bg-gray-900">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">
                      {testimonial.content}
                    </p>
                  </blockquote>
                  <figcaption className="flex mb-10 items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400 ">
                        {testimonial.position}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testimonials;
