import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const services = [
    {
        id: 1,
        title: "Fluid Inventory Control",
        description: "Streamlining fluid management for efficiency and cost savings.",
    },
    {
        id: 2,
        title: "Oil Control Handles",
        description: "Precision tools for effortless and accurate oil management.",
    },
    {
        id: 3,
        title: "Bulk Storage Tanks",
        description: "The cornerstone of efficient fluid storage and management.",
    },
    {
        id: 4,
        title: "On-Site Installations",
        description: "Professional expertise brought directly to your location for seamless setup.",
    },
    {
        id: 5,
        title: "Used Equipment",
        description: "Reliable and cost-effective solutions for your industrial needs.",
    },
    {
        id: 6,
        title: "Hose Reels",
        description: "Compact, reliable, and easy-to-use solutions for efficient hose management.",
    },
    {
        id: 7,
        title: "Service Centers",
        description: "Trusted hubs for maintenance and support to keep your equipment running smoothly.",
    },
    {
        id: 8,
        title: "Reconditioned Pump Exchanged",
        description: "Cost-effective and dependable replacements for your pumping needs.",
    },
    {
        id: 9,
        title: "Diaphragm Pumps",
        description: "Versatile and dependable fluid transfer solutions for various applications.",
    },
    {
        id: 10,
        title: "Oil Pumps",
        description: "Reliable and efficient solutions for precise oil distribution.",
    },

    // Add more service objects as needed
];

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