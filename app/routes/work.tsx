import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import Header from "~/components/Header";
import Collection from "~/components/Collection";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio | Eastlube" },
    { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
  ];
};

export default function Portfolio() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="px-4 md:px-14 lg:px-28">
        <Header
          title="Our Work"
          description="Eastern Lubrication Systems is a distributor of oil pumps, grease pumps, hose reels, portable waste drains, diaphragm pumps, oil control handles, grease dispensers and fluid inventory control products."
        />
      </div>
      <Collection />
      <Footer />
    </main>
  )
}