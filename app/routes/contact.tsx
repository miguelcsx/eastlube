import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import ContactForm from "~/components/ContactForm";
import Map from "~/components/Map";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact Us | Eastlube" },
        { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" },
    ];
};

export default function Contact() {
    return(
        <main>
            <Navbar/>
            <ContactForm/>
            <Map/>
            <Footer/>
        </main>
    )
}