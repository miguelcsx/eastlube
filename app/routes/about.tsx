import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import AboutUsSection from "~/components/AboutUs";
import MissionVision from "~/components/MissionVision";

export const meta: MetaFunction = () => {
    return [
        { title: "About Us | Eastlube" },
        { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
    ];
};

export default function About() {
    return (
        <main>
            <Navbar/>
            <AboutUsSection/>
            <MissionVision/>
            <Footer/>
        </main>
    )
}