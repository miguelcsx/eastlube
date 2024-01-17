import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ServiceSection from "~/components/ServiceSection";
import TestimonialCarousel from "~/components/Testimonials";
import { testimonials } from "~/lib/testimonials";

export const meta: MetaFunction = () => {
    return [
        { title: "Services | Eastlube" },
        { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
    ];
};

export default function Services() {
    return (
        <main>
            <Navbar />
            {/* Background Image */}
            <div
                className="bg-cover bg-center h-max relative"
                style={{
                    backgroundImage:
                        'url("images/oil-dispensing-station.jpeg")',
                }}
            >
                <div className="md:p-12 lg:p-36">
                    <Header 
                     title="Our Services" 
                     description="As a full line service company, we have every component neccesary for an effective lubrication system. We also perform installation and service making us the complete solution for all your needs."
                    />

                    <ServiceSection />

                    <TestimonialCarousel testimonials={testimonials}/>

                </div>

                <Footer />
            </div>


        </main>
    );
}
