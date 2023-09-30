import React from "react";

const ImageSection = () => {
  const images = [
    {
      src: "images/truck-tom.jpg",
      description: "Image 1 Description",
    },
    {
      src: "images/office.jpg",
      description: "Image 2 Description",
    },
    {
      src: "images/work-site.jpg",
      description: "Image 3 Description",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white pt-4 pb-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <div
                className="image-container"
                style={{
                  height: "300px", // Set your desired fixed height here
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.description}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-justify px-8 md:px-36 py-4">
          At Eastern Lubrication Systems, our tight-knit team embodies collaboration, innovation, and excellence. 
          We're united by a shared commitment to delivering exceptional service to our clients. 
          Join us in a dynamic work culture that values your contributions and fosters professional growth.
        </p>
      </div>
    </section>
  );
};

export default ImageSection;
