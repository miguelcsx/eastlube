import React from 'react';

const SplitScreen: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left half with 50% brightness and text */}
      <div className="flex-1 relative text-center">
        {/* Background image */}
        <img
          src="images/installations.jpg" 
          alt="Background"
          className="h-full w-full object-cover"
        />
        
        {/* Brightness overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
        
        {/* Title and subtitle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Keeping your business moving</h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">Experience the power and performance of a good lubrication system</p>
        </div>
      </div>

   
    </div>
  );
};

export default SplitScreen;
