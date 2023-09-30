import React from 'react';

const AboutSection: React.FC = () => {

  const getYearsOfExperience = (startYear: number) => {
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    const baseNumber = Math.floor(years / 5) * 5;
    return baseNumber;
  }

  const years = getYearsOfExperience(1992);

  return (
    <section className="bg-black text-white pt-14 pb-6">
      <div className="container mx-auto text-justify">
        <h2 className="text-3xl font-bold mb-8 text-center">About our business</h2>
        <p className="text-base mb-4 mx-8 md:mx-24 ">
          Eastern Lubrication System is a company with more than {years} years of experience in providing services in the lubrication equipment.
          We install and service automotive lubrication systems in the Maryland (D.C.), Delaware and Northern Virginia areas.
        </p>
        <p className="text-base pb-16 mx-8 md:mx-24">
          We offer competitive pricing and represent the most trusted names in the business:
          Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
