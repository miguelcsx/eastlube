import React from "react";

const CareersSection = () => {
  const jobPositions = [
    {
      title: "Secretary",
      subtitle: "Administrative Support",
      description: "Responsible for administrative support, managing correspondence, scheduling appointments, and maintaining efficient office operations.",
      imageSrc:
        "images/oil-dispensing-station.jpeg",
    },
    {
      title: "Lubrication Technician",
      subtitle: "Automotive Services",
      description: "Skilled in the installation, maintanance, and servicing of automotive lubrication systems, ensuring optimal performance and customer satisfaction.",
      imageSrc:
        "images/outside-pump.jpg",
    },
    {
      title: "Inventory Control Specialist",
      subtitle: "Resource Management",
      description: "Manages and optimizes fluid inventory, ensuring the availability of essential resources and minimizing waste within the company's operations.",
      imageSrc:
        "images/used-oil.jpg",
    },
  ];

  return (
    <section className="bg-black text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Careers</h2>
        <p className="text-lg mb-8">Explore our available job positions.</p>
        {jobPositions.map((position, index) => (
          <div key={index} className="mb-8">
            <img
              src={position.imageSrc}
              alt={position.title}
              className="mx-auto mb-4"
              style={{
                width: "80%", // Set the width to 80% of the viewport width
                height: "auto", // Maintain the aspect ratio
                maxWidth: "1400px", // Set a maximum width if needed
              }}
            />
            <h3 className="text-2xl font-semibold px-2 ">{position.title}</h3>
            <p className="text-lg mb-4">{position.subtitle}</p>
            <p className="text-md mb-4 px-8 md:px-32 ">{position.description}</p>
            <button className="bg-black border border-white text-white rounded-full py-2 px-6 mt-6 hover:bg-white hover:text-black">
              Contact
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersSection;
