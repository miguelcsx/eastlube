import React from "react";

const AboutUsSection = () => {

    const getYearsOfExperience = (startYear: number) => {
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear;
        const baseNumber = Math.floor(years / 5) * 5;
        return baseNumber;
    }

    const years = getYearsOfExperience(1992);

    return (
        <section className="bg-black text-white py-20 text-center">
            <h3 className="text-lg text-gray-500">Our History</h3>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg max-w-3xl mx-12 md:mx-auto text-justify">
                <b>Eastern Lubrication System</b> is a company with more than {years} of experience in providing services in the lubrication equipment.
                We install and service automotive lubrication systems in the Maryland (D.C.), Delaware and Northern Virginia areas.
                <br/>We offer competitive pricing and represent the most trusted names in the business:
                Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more.
            </p>
        </section>
    );
};

export default AboutUsSection;
