// app/components/LocationInfo.tsx

import React from "react";

const LocationInfo: React.FC = () => {

    return (
        <section className="bg-black py-28 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Left Column - Title */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Our Locations</h2>
                </div>

                {/* Right Column - Business Location and Contact */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <p className="text-lg mb-4">
                        512 N. Crain Highway, Suite #13 Glen Burnie, MD 21061
                    </p>
                    <p className="text-lg">
                        <a href="mailto:contact@example.com" className="text-lg hover:underline">
                            sales@eastlube.com
                        </a> | Phone: <a href="tel:410-761-2100" className="text-lg hover:underline">+1 410-320-7147</a>
                    </p>
                </div>
            </div>
        </section >
    )
}

export default LocationInfo;