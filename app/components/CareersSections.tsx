import React from "react";

const CareersSection = () => {
  const jobPositions = [
    {
      title: "Secretary",
      subtitle: "Administrative Support",
      description:
        "Responsible for administrative support, managing correspondence, scheduling appointments, and maintaining efficient office operations.",
      imageSrc: "images/tools.jpg",
      tags: ["Administrative", "Secretarial"],
    },
    {
      title: "Lubrication Technician",
      subtitle: "Automotive Services",
      description:
        "Skilled in the installation, maintenance, and servicing of automotive lubrication systems, ensuring optimal performance and customer satisfaction.",
      imageSrc: "images/lub.png",
      tags: ["Automotive", "Technician"],
    },
    {
      title: "Inventory Control Specialist",
      subtitle: "Resource Management",
      description:
        "Manages and optimizes fluid inventory, ensuring the availability of essential resources and minimizing waste within the company's operations.",
      imageSrc: "images/spanner.jpg",
      tags: ["Inventory Control", "Resource Management"],
    },
  ];

  return (
    <section className="bg-black text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Careers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mx-3 lg:mx-0">
          {jobPositions.map((position, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-black border-gray-500 border p-6 rounded shadow-md sm:mx-3 transition-all duration-300 hover:border-white hover:shadow-lg cursor-pointer"
              onClick={() => {}}
            >
              <div className="md:w-1/4 md:pr-6 mb-4 md:mb-0">
                <div className="h-48 overflow-hidden rounded">
                  <img
                    src={position.imageSrc}
                    alt={position.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {position.title}
                  </h3>
                  <p className="text-md text-gray-600 mb-2">{position.subtitle}</p>
                  <p className="text-sm mb-4">{position.description}</p>
                </div>
                <div className="flex flex-wrap mt-4">
                  {position.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-300 text-gray-800 rounded-md px-2 py-1 text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
