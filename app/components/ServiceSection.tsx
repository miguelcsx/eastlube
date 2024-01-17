import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { services } from "~/lib/services";

const ServiceSection = () => {
    return (
        <div className="bg-black bg-opacity-90 w-full p-8 border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white">
                {services.map((service) => (
                    <div key={service.id} className="p-4 flex items-center md:mx-12">
                        <div className="mr-4 w-16 h-16 flex-shrink-0">
                            <FontAwesomeIcon icon={faCube}/>
                        </div>
                        {/* Use flex-grow-1 to make the description flex to fill remaining space */}
                        <div className="flex-grow-1">
                            <h2 className="text-lg font-semibold text-cyan-300">{service.title}</h2>
                            <p className="mt-2">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;