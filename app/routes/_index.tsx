import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import SplitScreen from "~/components/Welcome";
import AboutSection from "~/components/AboutSection";

import Features from "~/components/Features";
import GallerySection from "~/components/Gallery";
import Map from "~/components/Map";
import LocationInfo from "~/components/LocationInfo";


export const meta: MetaFunction = () => {
  return [
    { title: "The best lubrication systems in the world | Eastlube" },
    { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar/>
      <SplitScreen />
      <AboutSection/>
      <div className="flex h-[80vh]">
        {/* Background image */}
        <img
          src="images/outside-pump.jpg" 
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <Features/>
      <GallerySection/>
      <div className="flex h-[70vh]">
        {/* Background image */}
        <img
          src="images/tubes.png" 
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <LocationInfo />
      <Map/>
      <Footer/>
    </main>
  );
}
