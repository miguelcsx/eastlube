import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: "Carter Machinery",
    testimony: "Eastern Lubrication Systems has consistently delivered top-notch service. Their technicians are incredibly knowledgeable, and their attention to detail during installations and maintenance is commendable. It's evident that they take pride in their work.",
    image: "images/carter.jpeg",
  },
  {
    id: 2,
    name: "Harbour Group Management",
    testimony: "We've been impressed by the company's dedication to innovation. Eastern Lubrication Systems doesn't just provide solutions; they continually seek out the latest technology to optimize our lubrication systems. Their commitment to staying at the forefront of the industry is truly commendable.",
    image: "images/hgliving.jpg",
  },
  {
    id: 3,
    name: "The Heritage Group Accelerator",
    testimony: "The work culture at Eastern Lubrication Systems is exceptional. The team's collaborative spirit and commitment to excellence make it a fantastic place to work. They've created an environment where employees feel valued, and that positivity translates into the high-quality service they provide to clients.",
    image: "images/hga.png",
  },
  {
    id: 4,
    name: "United Parcel Service",
    testimony: "Eastern Lubrication Systems transformed our workflow. Their expertise in lubrication systems made our maintenance process more efficient. They're attentive and offer cost-saving solutions. Partnering with them has been a game-changer for us.",
    image: "images/ups.png",
  }
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
