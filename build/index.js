var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3EKUQUWV.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services,
  meta: () => meta
});

// app/components/Navbar.tsx
import { useState as useState2 } from "react";
import { Link as Link2 } from "react-router-dom";

// app/components/Sidenav.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Sidenav = ({ isOpen, onClose }) => {
  let [isSidenavOpen, setIsSidenavOpen] = useState(isOpen), handleLinkClick = () => {
    onClose();
  };
  return useEffect(() => {
    setIsSidenavOpen(isOpen), isSidenavOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
  }, [isOpen, isSidenavOpen]), /* @__PURE__ */ jsxs2(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx3("div", { className: "fixed inset-0 bg-black/50 z-10", onClick: onClose }),
    /* @__PURE__ */ jsxs2("div", { className: `fixed top-0 left-0 h-full w-72 bg-black text-white z-20 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxs2("div", { className: "p-4 flex justify-between", children: [
        /* @__PURE__ */ jsx3("h1", { className: "text-xl font-bold p-2", children: "Eastlube" }),
        /* @__PURE__ */ jsx3("button", { onClick: onClose, className: "text-gray-500 hover:bg-white/5 focus:outline-none p-2 rounded", children: /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
      ] }),
      /* @__PURE__ */ jsx3("nav", { className: "flex-grow", children: /* @__PURE__ */ jsxs2("ul", { className: "flex flex-col hover:cursor-pointer mr-8 ml-3", children: [
        /* @__PURE__ */ jsx3("li", { className: "hover:rounded hover:bg-white/5 py-2 px-3", children: /* @__PURE__ */ jsx3(Link, { to: "/", onClick: handleLinkClick, children: "Home" }) }),
        /* @__PURE__ */ jsx3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsx3(Link, { to: "/services", onClick: handleLinkClick, children: "Services" }) }),
        /* @__PURE__ */ jsx3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsx3(Link, { to: "/work", onClick: handleLinkClick, children: "Portfolio" }) }),
        /* @__PURE__ */ jsx3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsx3(Link, { to: "/careers", onClick: handleLinkClick, children: "Careers" }) }),
        /* @__PURE__ */ jsx3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsx3(Link, { to: "/about", onClick: handleLinkClick, children: "About" }) }),
        /* @__PURE__ */ jsx3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsx3(Link, { to: "/contact", onClick: handleLinkClick, children: "Contact" }) })
      ] }) })
    ] })
  ] });
}, Sidenav_default = Sidenav;

// app/components/Navbar.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Navbar = () => {
  let [isSidenavOpen, setIsSidenavOpen] = useState2(!1);
  return /* @__PURE__ */ jsxs3("nav", { className: "sticky bg-black text-white top-0 left-0 right-0 z-50 flex justify-between items-center px-12 p-4 text-sm font-bold", children: [
    /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(Link2, { to: "/", children: /* @__PURE__ */ jsx4("img", { className: "h-3", src: "", alt: "Eastlube" }) }) }),
    /* @__PURE__ */ jsx4("div", { className: "hidden lg:inline", children: /* @__PURE__ */ jsxs3("ul", { className: "flex justify-center hover:cursor-pointer", children: [
      /* @__PURE__ */ jsx4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsx4(Link2, { to: "/services", children: "Services" }) }),
      /* @__PURE__ */ jsx4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsx4(Link2, { to: "/work", children: "Portfolio" }) }),
      /* @__PURE__ */ jsx4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsx4(Link2, { to: "/careers", children: "Careers" }) }),
      /* @__PURE__ */ jsx4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsx4(Link2, { to: "/about", children: "About" }) }),
      /* @__PURE__ */ jsx4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsx4(Link2, { to: "/contact", children: "Contact" }) })
    ] }) }),
    /* @__PURE__ */ jsx4("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx4(
      "button",
      {
        className: "inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-white/10 shadow-sm hover:bg-white/20",
        onClick: () => {
          setIsSidenavOpen(!isSidenavOpen);
        },
        children: "Menu"
      }
    ) }),
    /* @__PURE__ */ jsx4(Sidenav_default, { isOpen: isSidenavOpen, onClose: () => {
      setIsSidenavOpen(!1);
    } })
  ] });
}, Navbar_default = Navbar;

// app/components/Footer.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Footer = () => /* @__PURE__ */ jsx5("footer", { className: "bg-black text-white py-10", children: /* @__PURE__ */ jsxs4("div", { className: "container mx-auto text-center", children: [
  /* @__PURE__ */ jsx5("div", { className: "text-xl font-bold mb-6", children: "Eastlube" }),
  /* @__PURE__ */ jsx5("div", { className: "mb-2", children: /* @__PURE__ */ jsx5("a", { href: "mailto:contact@example.com", className: "text-lg hover:underline", children: "sales@eastlube.com" }) }),
  /* @__PURE__ */ jsxs4("div", { className: "text-sm", children: [
    "\xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Eastern Lubrication Systems. All Rights Reserved."
  ] })
] }) }), Footer_default = Footer;

// app/components/Header.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Header = ({ title, description }) => /* @__PURE__ */ jsx6("div", { className: "bg-black w-full p-8 border-b", children: /* @__PURE__ */ jsxs5("div", { className: "text-white text-left mb-8 mx-4 md:mx-32 mt-12", children: [
  /* @__PURE__ */ jsx6("h1", { className: "text-4xl font-bold", children: title }),
  /* @__PURE__ */ jsx6("p", { className: "mt-12 pr-12", children: description })
] }) }), Header_default = Header;

// app/components/ServiceSection.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var services = [
  {
    id: 1,
    title: "Fluid Inventory Control",
    description: "Streamlining fluid management for efficiency and cost savings."
  },
  {
    id: 2,
    title: "Oil Control Handles",
    description: "Precision tools for effortless and accurate oil management."
  },
  {
    id: 3,
    title: "Bulk Storage Tanks",
    description: "The cornerstone of efficient fluid storage and management."
  },
  {
    id: 4,
    title: "On-Site Installations",
    description: "Professional expertise brought directly to your location for seamless setup."
  },
  {
    id: 5,
    title: "Used Equipment",
    description: "Reliable and cost-effective solutions for your industrial needs."
  },
  {
    id: 6,
    title: "Hose Reels",
    description: "Compact, reliable, and easy-to-use solutions for efficient hose management."
  },
  {
    id: 7,
    title: "Service Centers",
    description: "Trusted hubs for maintenance and support to keep your equipment running smoothly."
  },
  {
    id: 8,
    title: "Reconditioned Pump Exchanged",
    description: "Cost-effective and dependable replacements for your pumping needs."
  },
  {
    id: 9,
    title: "Diaphragm Pumps",
    description: "Versatile and dependable fluid transfer solutions for various applications."
  },
  {
    id: 10,
    title: "Oil Pumps",
    description: "Reliable and efficient solutions for precise oil distribution."
  }
  // Add more service objects as needed
], ServiceSection = () => /* @__PURE__ */ jsx7("div", { className: "bg-black w-full p-8 border-b", children: /* @__PURE__ */ jsx7("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white", children: services.map((service) => /* @__PURE__ */ jsxs6("div", { className: "p-4 flex items-center md:mx-12", children: [
  /* @__PURE__ */ jsx7("div", { className: "mr-4 w-16 h-16 flex-shrink-0", children: /* @__PURE__ */ jsx7(FontAwesomeIcon, { icon: faCube }) }),
  /* @__PURE__ */ jsxs6("div", { className: "flex-grow-1", children: [
    /* @__PURE__ */ jsx7("h2", { className: "text-lg font-semibold", children: service.title }),
    /* @__PURE__ */ jsx7("p", { className: "mt-2", children: service.description })
  ] })
] }, service.id)) }) }), ServiceSection_default = ServiceSection;

// app/components/Testimonials.tsx
import { useState as useState3 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var testimonials = [
  {
    id: 1,
    name: "John F. Kennedy",
    testimony: "Eastern Lubrication Systems has consistently delivered top-notch service. Their technicians are incredibly knowledgeable, and their attention to detail during installations and maintenance is commendable. It's evident that they take pride in their work.",
    image: "https://images.unsplash.com/photo-1682713496815-33c0a4dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Barack Obama",
    testimony: "I've been impressed by the company's dedication to innovation. Eastern Lubrication Systems doesn't just provide solutions; they continually seek out the latest technology to optimize our lubrication systems. Their commitment to staying at the forefront of the industry is truly commendable.",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80"
  },
  {
    id: 3,
    name: "Bill Clinton",
    testimony: "The work culture at Eastern Lubrication Systems is exceptional. The team's collaborative spirit and commitment to excellence make it a fantastic place to work. They've created an environment where employees feel valued, and that positivity translates into the high-quality service they provide to clients.",
    image: "https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbCUyMGNsaW50b258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }
  // Add more testimonials as needed
], TestimonialCarousel = () => {
  let [currentTestimonialIndex, setCurrentTestimonialIndex] = useState3(0), nextTestimonial = () => {
    setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length);
  };
  return /* @__PURE__ */ jsxs7("div", { className: "bg-black  w-full p-8 text-white", children: [
    /* @__PURE__ */ jsxs7("div", { className: "max-w-4xl mx-auto relative container p-4 rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsx8("h1", { className: "text-4xl text-white mb-16", children: "Clients Opinions" }),
      /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 items-center", children: [
        /* @__PURE__ */ jsx8(
          "button",
          {
            className: "absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2",
            onClick: () => {
              setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length);
            },
            children: /* @__PURE__ */ jsx8(FontAwesomeIcon2, { icon: faChevronLeft })
          }
        ),
        /* @__PURE__ */ jsx8("div", { className: "col-span-1 ml-4 h-60 w-60 md:h-48 md:w-48 relative md:ml-12", children: /* @__PURE__ */ jsx8(
          "img",
          {
            src: testimonials[currentTestimonialIndex].image,
            alt: testimonials[currentTestimonialIndex].name,
            className: "w-full h-full object-cover rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsx8(
          "button",
          {
            className: "absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2",
            onClick: nextTestimonial,
            children: /* @__PURE__ */ jsx8(FontAwesomeIcon2, { icon: faChevronRight })
          }
        ),
        /* @__PURE__ */ jsxs7("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx8("h2", { className: "text-3xl font-semibold mb-2", children: testimonials[currentTestimonialIndex].name }),
          /* @__PURE__ */ jsx8("p", { className: "text-italic text-sm", children: testimonials[currentTestimonialIndex].testimony })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "flex justify-center mt-4", children: testimonials.map((_, index) => /* @__PURE__ */ jsx8(
      "div",
      {
        className: `w-2 h-2 rounded-full bg-zinc-600 ${currentTestimonialIndex === index ? "opacity-100" : "opacity-50"} mx-1`
      },
      index
    )) })
  ] });
}, Testimonials_default = TestimonialCarousel;

// app/routes/services.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var meta = () => [
  { title: "Services | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Services() {
  return /* @__PURE__ */ jsxs8("main", { children: [
    /* @__PURE__ */ jsx9(Navbar_default, {}),
    /* @__PURE__ */ jsxs8(
      "div",
      {
        className: "bg-cover bg-center h-max relative",
        style: {
          backgroundImage: 'url("images/oil-dispensing-station.jpeg")'
        },
        children: [
          /* @__PURE__ */ jsxs8("div", { className: "md:p-12 lg:p-36", children: [
            /* @__PURE__ */ jsx9(
              Header_default,
              {
                title: "Our Services",
                description: "As a full line service company, we have every component neccesary for an effective lubrication system. We also perform installation and service making us the complete solution for all your needs."
              }
            ),
            /* @__PURE__ */ jsx9(ServiceSection_default, {}),
            /* @__PURE__ */ jsx9(Testimonials_default, {})
          ] }),
          /* @__PURE__ */ jsx9(Footer_default, {})
        ]
      }
    )
  ] });
}

// app/routes/careers.tsx
var careers_exports = {};
__export(careers_exports, {
  default: () => Careers,
  meta: () => meta2
});

// app/components/AboutSection.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var AboutSection = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return Math.floor(years2 / 5) * 5;
  })(1992);
  return /* @__PURE__ */ jsx10("section", { className: "bg-black text-white pt-14 pb-6", children: /* @__PURE__ */ jsxs9("div", { className: "container mx-auto text-justify", children: [
    /* @__PURE__ */ jsx10("h2", { className: "text-3xl font-bold mb-8 text-center", children: "About our business" }),
    /* @__PURE__ */ jsxs9("p", { className: "text-base mb-4 mx-8 md:mx-24 ", children: [
      "Eastern Lubrication System is a company with more than ",
      years,
      " years of experience in providing services in the lubrication equipment. We install and service automotive lubrication systems in the Maryland (D.C.), Delaware and Northern Virginia areas."
    ] }),
    /* @__PURE__ */ jsx10("p", { className: "text-base pb-16 mx-8 md:mx-24", children: "We offer competitive pricing and represent the most trusted names in the business: Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more." })
  ] }) });
}, AboutSection_default = AboutSection;

// app/components/ImageSection.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var ImageSection = () => /* @__PURE__ */ jsx11("section", { className: "bg-zinc-950 text-white pt-4 pb-8", children: /* @__PURE__ */ jsxs10("div", { className: "mx-auto", children: [
  /* @__PURE__ */ jsx11("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-0", children: [
    {
      src: "images/truck-tom.jpg",
      description: "Image 1 Description"
    },
    {
      src: "images/office.jpg",
      description: "Image 2 Description"
    },
    {
      src: "images/work-site.jpg",
      description: "Image 3 Description"
    }
  ].map((image, index) => /* @__PURE__ */ jsx11("div", { className: "w-full", children: /* @__PURE__ */ jsx11(
    "div",
    {
      className: "image-container",
      style: {
        height: "300px",
        // Set your desired fixed height here
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsx11(
        "img",
        {
          src: image.src,
          alt: image.description,
          className: "w-full h-full object-cover"
        }
      )
    }
  ) }, index)) }),
  /* @__PURE__ */ jsx11("p", { className: "mt-4 text-justify px-8 md:px-36 py-4", children: "At Eastern Lubrication Systems, our tight-knit team embodies collaboration, innovation, and excellence. We're united by a shared commitment to delivering exceptional service to our clients. Join us in a dynamic work culture that values your contributions and fosters professional growth." })
] }) }), ImageSection_default = ImageSection;

// app/components/CareersSections.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var CareersSection = () => /* @__PURE__ */ jsx12("section", { className: "bg-black text-white pt-24 pb-12", children: /* @__PURE__ */ jsxs11("div", { className: "max-w-6xl mx-auto text-center", children: [
  /* @__PURE__ */ jsx12("h2", { className: "text-4xl font-bold mb-4", children: "Careers" }),
  /* @__PURE__ */ jsx12("p", { className: "text-lg mb-8", children: "Explore our available job positions." }),
  [
    {
      title: "Secretary",
      subtitle: "Administrative Support",
      description: "Responsible for administrative support, managing correspondence, scheduling appointments, and maintaining efficient office operations.",
      imageSrc: "images/oil-dispensing-station.jpeg"
    },
    {
      title: "Lubrication Technician",
      subtitle: "Automotive Services",
      description: "Skilled in the installation, maintanance, and servicing of automotive lubrication systems, ensuring optimal performance and customer satisfaction.",
      imageSrc: "images/outside-pump.jpg"
    },
    {
      title: "Inventory Control Specialist",
      subtitle: "Resource Management",
      description: "Manages and optimizes fluid inventory, ensuring the availability of essential resources and minimizing waste within the company's operations.",
      imageSrc: "images/used-oil.jpg"
    }
  ].map((position, index) => /* @__PURE__ */ jsxs11("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsx12(
      "img",
      {
        src: position.imageSrc,
        alt: position.title,
        className: "mx-auto mb-4",
        style: {
          width: "80%",
          // Set the width to 80% of the viewport width
          height: "auto",
          // Maintain the aspect ratio
          maxWidth: "1400px"
          // Set a maximum width if needed
        }
      }
    ),
    /* @__PURE__ */ jsx12("h3", { className: "text-2xl font-semibold px-2 ", children: position.title }),
    /* @__PURE__ */ jsx12("p", { className: "text-lg mb-4", children: position.subtitle }),
    /* @__PURE__ */ jsx12("p", { className: "text-md mb-4 px-8 md:px-32 ", children: position.description }),
    /* @__PURE__ */ jsx12("button", { className: "bg-black border border-white text-white rounded-full py-2 px-6 mt-6 hover:bg-white hover:text-black", children: "Contact" })
  ] }, index))
] }) }), CareersSections_default = CareersSection;

// app/routes/careers.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var meta2 = () => [
  { title: "Careers | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Careers() {
  return /* @__PURE__ */ jsxs12("main", { children: [
    /* @__PURE__ */ jsx13(Navbar_default, {}),
    /* @__PURE__ */ jsx13(AboutSection_default, {}),
    /* @__PURE__ */ jsx13(ImageSection_default, {}),
    /* @__PURE__ */ jsx13("div", { className: "flex h-[70vh]", children: /* @__PURE__ */ jsx13(
      "img",
      {
        src: "images/entrance.png",
        alt: "Background",
        className: "h-full w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx13(CareersSections_default, {}),
    /* @__PURE__ */ jsx13(Footer_default, {})
  ] });
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  meta: () => meta3
});

// app/components/ContactForm.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
var ContactForm = () => /* @__PURE__ */ jsx14("div", { className: "bg-zinc-950 text-white pt-24 pb-6 md:px-12 px-6", children: /* @__PURE__ */ jsx14("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
  /* @__PURE__ */ jsxs13("div", { children: [
    /* @__PURE__ */ jsx14("h2", { className: "text-4xl font-bold mb-4", children: "Contact" }),
    /* @__PURE__ */ jsx14("p", { className: "text-base mb-8 mr-20", children: "Come visit our service centers and experience the power of expert lubrication support!" }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold", children: "Address" }),
      /* @__PURE__ */ jsx14("p", { children: "512 N. Crain Highway, Suite #13" }),
      /* @__PURE__ */ jsx14("p", { children: "Glen Burnie, MD 21061" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold", children: "Email" }),
      /* @__PURE__ */ jsx14("a", { href: "mailto:contact@example.com", className: "text-lg hover:underline", children: "sales@eastlube.com" })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold", children: "Phone" }),
      /* @__PURE__ */ jsx14("p", { children: "+1 833-880-PUMP (7867)" })
    ] })
  ] }),
  /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsxs13("form", { children: [
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("label", { htmlFor: "name", className: "block text-base font-thin mb-1", children: "Name" }),
      /* @__PURE__ */ jsx14(
        "input",
        {
          required: !0,
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Enter your name",
          className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4 flex", children: [
      /* @__PURE__ */ jsxs13("div", { className: "mr-2", children: [
        /* @__PURE__ */ jsx14("label", { htmlFor: "address", className: "block text-base font-thin mb-1", children: "Address" }),
        /* @__PURE__ */ jsx14(
          "input",
          {
            type: "text",
            id: "address",
            name: "address",
            placeholder: "Enter your address",
            className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx14("label", { htmlFor: "zipCode", className: "block text-base font-thin mb-1", children: "ZIP Code" }),
        /* @__PURE__ */ jsx14(
          "input",
          {
            type: "text",
            id: "zipCode",
            name: "zipCode",
            placeholder: "Enter your ZIP code",
            className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4 flex", children: [
      " ",
      /* @__PURE__ */ jsxs13("div", { className: "mr-2", children: [
        /* @__PURE__ */ jsx14("label", { htmlFor: "email", className: "block text-base font-thin mb-1", children: "Email" }),
        /* @__PURE__ */ jsx14(
          "input",
          {
            required: !0,
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Enter your email",
            className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx14("label", { htmlFor: "phone", className: "block text-base font-thin mb-1", children: "Phone" }),
        /* @__PURE__ */ jsx14(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            placeholder: "Enter your phone number",
            className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("label", { htmlFor: "subject", className: "block text-base font-thin mb-1", children: "Subject" }),
      /* @__PURE__ */ jsx14(
        "input",
        {
          type: "text",
          id: "subject",
          name: "subject",
          placeholder: "Enter the subject",
          className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx14("label", { htmlFor: "message", className: "block text-base font-thin mb-1", children: "Message" }),
      /* @__PURE__ */ jsx14(
        "textarea",
        {
          id: "message",
          name: "message",
          placeholder: "Write your message here ...",
          className: "w-full border border-white rounded-md py-3 px-3 text-white bg-transparent"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-4 flex justify-center", children: [
      " ",
      /* @__PURE__ */ jsx14(
        "button",
        {
          type: "submit",
          className: "bg-white text-black border border-black rounded-md py-2 px-6 hover:bg-zinc-300",
          children: "Send"
        }
      )
    ] })
  ] }) })
] }) }) }), ContactForm_default = ContactForm;

// app/components/Map.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Map = () => /* @__PURE__ */ jsx15("section", { className: "w-screen h-[60vh]", children: /* @__PURE__ */ jsx15(
  "iframe",
  {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12372.373576009162!2d-76.6217315!3d39.1725975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fd22320bc205%3A0x1898610d91b6621e!2sEastern%20Lubrication%20Systems!5e0!3m2!1sen!2sco!4v1695784779300!5m2!1sen!2sco",
    width: "100%",
    height: "100%",
    style: { border: "1" },
    allowFullScreen: !0,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }
) }), Map_default = Map;

// app/routes/contact.tsx
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var meta3 = () => [
  { title: "Contact Us | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Contact() {
  return /* @__PURE__ */ jsxs14("main", { children: [
    /* @__PURE__ */ jsx16(Navbar_default, {}),
    /* @__PURE__ */ jsx16(ContactForm_default, {}),
    /* @__PURE__ */ jsx16(Map_default, {}),
    /* @__PURE__ */ jsx16(Footer_default, {})
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});

// app/components/Welcome.tsx
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var SplitScreen = () => /* @__PURE__ */ jsx17("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxs15("div", { className: "flex-1 relative text-center", children: [
  /* @__PURE__ */ jsx17(
    "img",
    {
      src: "images/installations.jpg",
      alt: "Background",
      className: "h-full w-full object-cover"
    }
  ),
  /* @__PURE__ */ jsx17("div", { className: "absolute top-0 left-0 h-full w-full bg-black opacity-50" }),
  /* @__PURE__ */ jsxs15("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white", children: [
    /* @__PURE__ */ jsx17("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6", children: "Keeping your business moving" }),
    /* @__PURE__ */ jsx17("p", { className: "text-base md:text-lg lg:text-xl mb-8", children: "Experience the power and performance of a good lubrication system" })
  ] })
] }) }), Welcome_default = SplitScreen;

// app/components/Features.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var Features = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return `${Math.floor(years2 / 5) * 5}+`;
  })(1992);
  return /* @__PURE__ */ jsx18("section", { className: "bg-black text-white py-12", children: /* @__PURE__ */ jsxs16("div", { className: "container mx-auto text-center", children: [
    /* @__PURE__ */ jsx18("h2", { className: "text-4xl font-bold mb-12", children: "Features" }),
    /* @__PURE__ */ jsxs16("div", { className: "flex flex-wrap justify-center", children: [
      /* @__PURE__ */ jsx18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxs16("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "1" }),
        /* @__PURE__ */ jsxs16("div", { className: "text-lg", children: [
          years,
          " Years of Experience"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxs16("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "2" }),
        /* @__PURE__ */ jsx18("div", { className: "text-lg", children: "Quality Assurance" })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxs16("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "3" }),
        /* @__PURE__ */ jsx18("div", { className: "text-lg", children: "Advanced Tech" })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxs16("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "4" }),
        /* @__PURE__ */ jsx18("div", { className: "text-lg", children: "Licensed Professionals" })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxs16("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "5" }),
        /* @__PURE__ */ jsx18("div", { className: "text-lg", children: "24/7 Support" })
      ] }) })
    ] })
  ] }) });
}, Features_default = Features;

// app/components/Gallery.tsx
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState as useState4, useEffect as useEffect2 } from "react";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var GallerySection = () => {
  let [scrollIndex, setScrollIndex] = useState4(0), [isSmallScreen, setIsSmallScreen] = useState4(!1), itemsPerPage = isSmallScreen ? 2 : 3, images = [
    {
      id: 1,
      src: "images/bulk-oil-tanks.jpeg",
      title: "Bulk Oil Tanks",
      description: "Description 1"
    },
    {
      id: 2,
      src: "images/oil-bar-dispenser.jpeg",
      title: "Oil Bar Dispenser",
      description: "Description 2"
    },
    {
      id: 3,
      src: "images/bulk-oil-tanks-2.jpeg",
      title: "Bulk Oil Tanks",
      description: "Description 3"
    },
    {
      id: 4,
      src: "images/overhead-reels-installation.jpeg",
      title: "Overhead Reels Installations",
      description: "Description 4"
    },
    {
      id: 5,
      src: "images/reels.jpg",
      title: "Reels",
      description: "Description 5"
    },
    {
      id: 6,
      src: "images/pumps.png",
      title: "Pumps",
      description: "Description 6"
    }
  ];
  useEffect2(() => {
    let handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    return handleResize(), window.addEventListener("resize", handleResize), () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let handleNext = () => {
    scrollIndex + itemsPerPage < images.length && setScrollIndex(scrollIndex + 1);
  }, handlePrev = () => {
    scrollIndex > 0 && setScrollIndex(scrollIndex - 1);
  };
  return /* @__PURE__ */ jsx19("section", { className: "bg-zinc-950 text-white py-12", children: /* @__PURE__ */ jsxs17("div", { className: "container mx-auto text-center", children: [
    /* @__PURE__ */ jsx19("h2", { className: "text-4xl font-bold mb-8", children: "Our Collections" }),
    /* @__PURE__ */ jsx19("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs17("div", { className: "flex items-center text-black", children: [
      scrollIndex > 0 && /* @__PURE__ */ jsx19("button", { className: "absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 left-3", onClick: handlePrev, children: /* @__PURE__ */ jsx19(FontAwesomeIcon3, { icon: faArrowLeft }) }),
      scrollIndex + itemsPerPage < images.length && /* @__PURE__ */ jsx19("button", { className: "rounded-sm absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 right-3", onClick: handleNext, children: /* @__PURE__ */ jsx19(FontAwesomeIcon3, { icon: faArrowRight }) }),
      /* @__PURE__ */ jsx19("div", { className: "flex", style: { width: `${100 * (images.length / itemsPerPage)}%` }, children: images.slice(scrollIndex, scrollIndex + itemsPerPage).map((image) => /* @__PURE__ */ jsx19("div", { className: "gallery-item relative mx-2 group", style: { width: `${100 / itemsPerPage}%` }, children: /* @__PURE__ */ jsxs17("div", { className: "gallery-image-container relative min-h-[300px] pb-[150%]", children: [
        /* @__PURE__ */ jsx19(
          "img",
          {
            src: image.src,
            alt: image.title,
            className: "gallery-image object-cover transition-transform hover:scale-105 hover:brightness-50",
            style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs17("div", { className: "gallery-info absolute bottom-0 left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100", children: [
          /* @__PURE__ */ jsx19("h3", { className: "text-lg font-bold", children: image.title }),
          /* @__PURE__ */ jsx19("p", { className: "text-xs", children: image.description })
        ] })
      ] }) }, image.id)) })
    ] }) })
  ] }) });
}, Gallery_default = GallerySection;

// app/components/LocationInfo.tsx
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var LocationInfo = () => /* @__PURE__ */ jsx20("section", { className: "bg-black py-28 text-white", children: /* @__PURE__ */ jsxs18("div", { className: "container mx-auto flex flex-col md:flex-row items-center justify-center", children: [
  /* @__PURE__ */ jsx20("div", { className: "md:w-1/2 text-center md:text-left", children: /* @__PURE__ */ jsx20("h2", { className: "text-5xl font-bold", children: "Our Locations" }) }),
  /* @__PURE__ */ jsxs18("div", { className: "md:w-1/2 mt-6 md:mt-0", children: [
    /* @__PURE__ */ jsx20("p", { className: "text-lg mb-4", children: "512 N. Crain Highway, Suite #13 Glen Burnie, MD 21061" }),
    /* @__PURE__ */ jsxs18("p", { className: "text-lg", children: [
      /* @__PURE__ */ jsx20("a", { href: "mailto:contact@example.com", className: "text-lg hover:underline", children: "sales@eastlube.com" }),
      " | Phone: +1 833-880-PUMP (7867)"
    ] })
  ] })
] }) }), LocationInfo_default = LocationInfo;

// app/routes/_index.tsx
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
var meta4 = () => [
  { title: "The best lubrication systems in the world | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Index() {
  return /* @__PURE__ */ jsxs19("main", { children: [
    /* @__PURE__ */ jsx21(Navbar_default, {}),
    /* @__PURE__ */ jsx21(Welcome_default, {}),
    /* @__PURE__ */ jsx21(AboutSection_default, {}),
    /* @__PURE__ */ jsx21("div", { className: "flex h-[80vh]", children: /* @__PURE__ */ jsx21(
      "img",
      {
        src: "images/outside-pump.jpg",
        alt: "Background",
        className: "h-full w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx21(Features_default, {}),
    /* @__PURE__ */ jsx21(Gallery_default, {}),
    /* @__PURE__ */ jsx21("div", { className: "flex h-[70vh]", children: /* @__PURE__ */ jsx21(
      "img",
      {
        src: "images/tubes.png",
        alt: "Background",
        className: "h-full w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx21(LocationInfo_default, {}),
    /* @__PURE__ */ jsx21(Map_default, {}),
    /* @__PURE__ */ jsx21(Footer_default, {})
  ] });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta5
});

// app/components/AboutUs.tsx
import { jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
var AboutUsSection = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return Math.floor(years2 / 5) * 5;
  })(1992);
  return /* @__PURE__ */ jsxs20("section", { className: "bg-black text-white py-20 text-center", children: [
    /* @__PURE__ */ jsx22("h3", { className: "text-lg text-gray-500", children: "Our History" }),
    /* @__PURE__ */ jsx22("h2", { className: "text-4xl font-bold mb-4", children: "About Us" }),
    /* @__PURE__ */ jsxs20("p", { className: "text-lg max-w-3xl mx-12 md:mx-auto text-justify", children: [
      /* @__PURE__ */ jsx22("b", { children: "Eastern Lubrication System" }),
      " is a company with more than ",
      years,
      " of experience in providing services in the lubrication equipment. We install and service automotive lubrication systems in the Maryland (D.C.), Delaware and Northern Virginia areas.",
      /* @__PURE__ */ jsx22("br", {}),
      "We offer competitive pricing and represent the most trusted names in the business: Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more."
    ] })
  ] });
}, AboutUs_default = AboutUsSection;

// app/components/MissionVision.tsx
import { jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
var MissionVision = () => /* @__PURE__ */ jsxs21("section", { className: "border-y", children: [
  /* @__PURE__ */ jsxs21("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsx23("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx23(
      "img",
      {
        src: "images/small-overhead-reels.jpg",
        alt: "Image 1",
        className: "w-full h-auto"
      }
    ) }),
    /* @__PURE__ */ jsxs21("div", { className: "md:w-1/2 bg-black text-white py-6 px-8", children: [
      /* @__PURE__ */ jsx23("h2", { className: "text-4xl font-bold mb-4", children: "Mission" }),
      /* @__PURE__ */ jsx23("p", { className: "text-lg", children: "To empower industries with precision lubrication solutions, ensuring optimal performance, efficiency, and sustainability, while building lasting relationships based on trust and excellence." })
    ] })
  ] }),
  /* @__PURE__ */ jsxs21("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxs21("div", { className: "md:w-1/2 bg-black text-white py-6 px-8", children: [
      /* @__PURE__ */ jsx23("h2", { className: "text-4xl font-bold mb-4", children: "Vision" }),
      /* @__PURE__ */ jsx23("p", { className: "text-lg", children: "To be the leading provider of innovative lubrication technology, setting industry standards for reliability and service. We aspire to continuously evolve, adapting to the changing needs of our clients and the world, while contributing to a greener, more efficient future." })
    ] }),
    /* @__PURE__ */ jsx23("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx23(
      "img",
      {
        src: "images/reels-place.jpg",
        alt: "Image 2",
        className: "w-full h-full object-cover"
      }
    ) })
  ] })
] }), MissionVision_default = MissionVision;

// app/routes/about.tsx
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
var meta5 = () => [
  { title: "Contact Us | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function About() {
  return /* @__PURE__ */ jsxs22("main", { children: [
    /* @__PURE__ */ jsx24(Navbar_default, {}),
    /* @__PURE__ */ jsx24(AboutUs_default, {}),
    /* @__PURE__ */ jsx24(MissionVision_default, {}),
    /* @__PURE__ */ jsx24(Footer_default, {})
  ] });
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Portfolio,
  meta: () => meta6
});

// app/components/Collection.tsx
import { jsx as jsx25, jsxs as jsxs23 } from "react/jsx-runtime";
var Collection = () => /* @__PURE__ */ jsx25("div", { className: "bg-black p-4 md:p-14", children: /* @__PURE__ */ jsx25("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx25("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
  {
    id: 1,
    src: "images/polish.jpg",
    title: "Polish",
    description: "Description 1"
  },
  {
    id: 2,
    src: "images/house-pump.png",
    title: "House Pump",
    description: "Description 2"
  },
  {
    id: 3,
    src: "images/pumps.png",
    title: "Pumps",
    description: "Description 3"
  },
  {
    id: 4,
    src: "images/reels.jpg",
    title: "Reels",
    description: "Description 4"
  },
  {
    id: 5,
    src: "images/bulk-oil-tanks-2.jpeg",
    title: "Bulk Oil Tanks",
    description: "Description 5"
  },
  {
    id: 6,
    src: "images/oil-bar-dispenser.jpeg",
    title: "Oil Bar Dispenser",
    description: "Description 6"
  }
].map((image, index) => /* @__PURE__ */ jsxs23("div", { className: "w-full relative aspect-ratio-1/1 group", children: [
  /* @__PURE__ */ jsx25("img", { src: image.src, alt: `Image ${index}`, className: "w-full h-full object-cover hover:brightness-50" }),
  /* @__PURE__ */ jsxs23("div", { className: "gallery-info absolute top-[50%] left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsx25("h3", { className: "text-lg font-bold", children: image.title }),
    /* @__PURE__ */ jsx25("p", { className: "text-xs", children: image.description })
  ] })
] }, index)) }) }) }), Collection_default = Collection;

// app/routes/work.tsx
import { jsx as jsx26, jsxs as jsxs24 } from "react/jsx-runtime";
var meta6 = () => [
  { title: "Portfolio | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Portfolio() {
  return /* @__PURE__ */ jsxs24("main", { className: "bg-black", children: [
    /* @__PURE__ */ jsx26(Navbar_default, {}),
    /* @__PURE__ */ jsx26("div", { className: "px-4 md:px-14 lg:px-28", children: /* @__PURE__ */ jsx26(
      Header_default,
      {
        title: "Our Work",
        description: "Eastern Lubrication Systems is a distributor of oil pumps, grease pumps, hose reels, portable waste drains, diaphragm pumps, oil control handles, grease dispensers and fluid inventory control products."
      }
    ) }),
    /* @__PURE__ */ jsx26(Collection_default, {}),
    /* @__PURE__ */ jsx26(Footer_default, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-J4YGCUIQ.js", imports: ["/build/_shared/chunk-BZNBSATU.js", "/build/_shared/chunk-NR2ZEJD3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4FZ5V23S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-K34HO53Z.js", imports: ["/build/_shared/chunk-UTT5JTMV.js", "/build/_shared/chunk-34S6LJ5O.js", "/build/_shared/chunk-6UJLK7KR.js", "/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-AKSMYOHZ.js", imports: ["/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/careers": { id: "routes/careers", parentId: "root", path: "careers", index: void 0, caseSensitive: void 0, module: "/build/routes/careers-56DXIACP.js", imports: ["/build/_shared/chunk-34S6LJ5O.js", "/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-57HNUJ3P.js", imports: ["/build/_shared/chunk-6UJLK7KR.js", "/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-QURRY2CF.js", imports: ["/build/_shared/chunk-UTT5JTMV.js", "/build/_shared/chunk-25JR747B.js", "/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-NODXEGUB.js", imports: ["/build/_shared/chunk-25JR747B.js", "/build/_shared/chunk-44QMHMMR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "351717fc", hmr: void 0, url: "/build/manifest-351717FC.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/careers": {
    id: "routes/careers",
    parentId: "root",
    path: "careers",
    index: void 0,
    caseSensitive: void 0,
    module: careers_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
