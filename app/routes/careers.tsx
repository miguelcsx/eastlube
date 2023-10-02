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
            <Header title="Work with us" description="Eastern Lubrication Systems is a distributor of oil pumps, grease pumps, hose reels, portable waste drains, diaphragm pumps, oil control handles, grease dispensers and fluid inventory control products. As a full line service company, we have every component necessary for an effective lubrication system. We also perform installation service making us the complete solution for all your needs."/>

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