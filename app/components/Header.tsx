import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  children?: any;
}

const Header: React.FC<HeaderProps> = ({ title, description, children }) => {
  return (
    <div className="bg-black w-full p-8 border-b">
      {/* Title and Description */}
      <div className="text-white text-left mb-8 mx-2 md:mx-16 lg:mx-32 mt-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-12 md:pr-12">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Header;
