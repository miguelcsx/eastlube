import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AboutSection from "~/components/AboutSection";
import ImageSection from "~/components/ImageSection";
import CareersSection from "~/components/CareersSections";

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
            <AboutSection />

            <ImageSection />
            <div className="flex h-[70vh]">
                {/* Background image */}
                <img
                    src="images/entrance.png"
                    alt="Background"
                    className="h-full w-full object-cover"
                />
            </div>
            <CareersSection />
            <Footer />
        </main>
    );
};