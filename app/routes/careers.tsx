import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import ImageSection from "~/components/ImageSection";
import CareersSection from "~/components/CareersSections";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
    return [
        { title: "Careers | Eastlube" },
        { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
    ];
};

export default function Careers() {
    return (
        <main>
            <Navbar />
            <Header title="Work with us" description="Think about our service centers as a pit stop for your lubrication equipment. Our skilled technicians are ready to provide fast and efficient installation, maintenance, and repair services for all your lubrication needs. Whether you need a quick tune-up or a major overhaul, our service centers are equipped with the latest technology and tools to get you back on the road to success."/>

            <ImageSection />
            <div className="flex h-[70vh] bg-black">
                {/* Background image */}
                <img
                    src="images/entrance.png"
                    alt="Background"
                    className="h-full w-full object-cover md:px-3 lg:px-6"
                />
            </div>
            <CareersSection />
            <Footer />
        </main>
    );
};