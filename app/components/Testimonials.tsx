import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Testimonial {
  id: number;
  name: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const changeTestimonial = (newIndex: number) => {
    setCurrentTestimonialIndex(newIndex);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay && !isHovered) {
      interval = setInterval(() => {
        changeTestimonial((currentTestimonialIndex + 1) % testimonials.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [autoPlay, isHovered, currentTestimonialIndex]);

  const nextTestimonial = () => {
    changeTestimonial((currentTestimonialIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeTestimonial((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <div
      className="bg-black w-full p-8 text-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto relative container p-4 rounded-lg overflow-hidden">
        {/* Title */}
        <h1 className="text-4xl text-white mb-16 text-center">Featured Clients</h1>

        {/* Testimonial Carousel */}
        <div className="relative" ref={carouselRef}>
          {/* Navigation Arrows (Left) */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2"
            onClick={prevTestimonial}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Testimonial Slides */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-slide ${index === currentTestimonialIndex
                ? "opacity-100"
                : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center`}
            >
              {/* Testimonial Image */}
              <div className="w-48 h-48 md:w-60 md:h-60 mx-auto mb-4 relative overflow-hidden rounded-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Testimonial Title */}
              <div className="text-xl md:text-2xl font-medium text-center">
                {testimonial.name}
              </div>
            </div>
          ))}

          {/* Navigation Arrows (Right) */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2"
            onClick={nextTestimonial}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Index Dots */}
        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full bg-zinc-600 ${currentTestimonialIndex % testimonials.length === index
                ? "opacity-100"
                : "opacity-50"
                } mx-1 cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
