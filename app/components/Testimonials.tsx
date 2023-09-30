import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: "John F. Kennedy",
    testimony: "Eastern Lubrication Systems has consistently delivered top-notch service. Their technicians are incredibly knowledgeable, and their attention to detail during installations and maintenance is commendable. It's evident that they take pride in their work.",
    image: "https://images.unsplash.com/photo-1682713496815-33c0a4dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Barack Obama",
    testimony: "I've been impressed by the company's dedication to innovation. Eastern Lubrication Systems doesn't just provide solutions; they continually seek out the latest technology to optimize our lubrication systems. Their commitment to staying at the forefront of the industry is truly commendable.",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
  },
  {
    id: 3,
    name: "Bill Clinton",
    testimony: "The work culture at Eastern Lubrication Systems is exceptional. The team's collaborative spirit and commitment to excellence make it a fantastic place to work. They've created an environment where employees feel valued, and that positivity translates into the high-quality service they provide to clients.",
    image: "https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbCUyMGNsaW50b258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black  w-full p-8 text-white">
      <div className="max-w-4xl mx-auto relative container p-4 rounded-lg overflow-hidden">
        {/* Title */}
        <h1 className="text-4xl text-white mb-16">Clients Opinions</h1>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Navigation Arrows (Left) */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2"
            onClick={prevTestimonial}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Testimonial Image */}
          <div className="col-span-1 ml-4 h-60 w-60 md:h-48 md:w-48 relative md:ml-12">
            <img
              src={testimonials[currentTestimonialIndex].image}
              alt={testimonials[currentTestimonialIndex].name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Navigation Arrows (Right) */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2"
            onClick={nextTestimonial}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Testimonial Name and Testimony */}
          <div className="col-span-1">
            <h2 className="text-3xl font-semibold mb-2">{testimonials[currentTestimonialIndex].name}</h2>
            <p className="text-italic text-sm">{testimonials[currentTestimonialIndex].testimony}</p>
          </div>
        </div>
      </div>

      {/* Index Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full bg-zinc-600 ${currentTestimonialIndex === index ? "opacity-100" : "opacity-50"
              } mx-1`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
