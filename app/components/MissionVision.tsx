import React from "react";

const MissionVision = () => {
  return (
    <section className="border-y">
      {/* First Row */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2">
          <img
            src="images/small-overhead-reels.jpg" // Replace with your image URL
            alt="Image 1"
            className="w-full h-auto"
          />
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 bg-black text-white py-6 px-8">
          <h2 className="text-4xl font-bold mb-4">Mission</h2>
          <p className="text-lg">
            To be one of the best companies in the automotive area, in the states of Maryland, Delaware and Northern Virginia of United States, which provides our customers with the most optimal solutions according to their needs in terms of price, quality and service.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2 bg-black text-white py-6 px-8">
          <h2 className="text-4xl font-bold mb-4">Vision</h2>
          <p className="text-lg">
            To be the leading provider of innovative lubrication technology, setting industry standards for reliability and service. We aspire to continuously evolve, adapting to the changing needs of our clients and the world, while contributing to a greener, more efficient future.
          </p>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2">
          <img
            src="images/reels-place.jpg" // Replace with your image URL
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
