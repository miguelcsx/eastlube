// app/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        {/* First row - Company name */}
        <div className="text-xl font-bold mb-6">Eastern Lubrication Systems</div>

        {/* Second row - Contact email */}
        <div className="mb-2">
          <a href="mailto:contact@example.com" className="text-lg hover:underline">
            sales@eastlube.com
          </a>
        </div>

        {/* Third row - Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Eastern Lubrication Systems. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
