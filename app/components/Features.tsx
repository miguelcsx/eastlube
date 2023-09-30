import React from 'react';

const Features: React.FC = () => {

    const getYearsOfExperience = (startYear: number) => {
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear;
        const baseNumber = Math.floor(years/5) * 5;
        return `${baseNumber}+`;
    }

    const years = getYearsOfExperience(1992);

    return (
        <section className="bg-black text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Features</h2>
                <div className="flex flex-wrap justify-center">
                    {/* Feature 1 */}
                    <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative">
                        <div className="rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center">
                            <div className="text-cyan-500 text-3xl font-bold mb-2">1</div>
                            <div className="text-lg">{years} Years of Experience</div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative">
                        <div className="rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center">
                            <div className="text-cyan-500 text-3xl font-bold mb-2">2</div>
                            <div className="text-lg">Quality Assurance</div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative">
                        <div className="rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center">
                            <div className="text-cyan-500 text-3xl font-bold mb-2">3</div>
                            <div className="text-lg">Advanced Tech</div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative">
                        <div className="rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center">
                            <div className="text-cyan-500 text-3xl font-bold mb-2">4</div>
                            <div className="text-lg">Licensed Professionals</div>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative">
                        <div className="rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center">
                            <div className="text-cyan-500 text-3xl font-bold mb-2">5</div>
                            <div className="text-lg">24/7 Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
