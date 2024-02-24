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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-NWDVKS3V.css";

// app/root.tsx
import { Analytics } from "@vercel/analytics/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Analytics, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
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
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Sidenav = ({ isOpen, onClose }) => {
  let [isSidenavOpen, setIsSidenavOpen] = useState(isOpen), handleLinkClick = () => {
    onClose();
  };
  return useEffect(() => {
    setIsSidenavOpen(isOpen), isSidenavOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
  }, [isOpen, isSidenavOpen]), /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsxDEV3("div", { className: "fixed inset-0 bg-black/50 z-10", onClick: onClose }, void 0, !1, {
      fileName: "app/components/Sidenav.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: `fixed top-0 left-0 h-full w-72 bg-black text-white z-20 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "p-4 flex justify-between", children: [
        /* @__PURE__ */ jsxDEV3("h1", { className: "text-xl font-bold p-2", children: "Eastlube" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("button", { onClick: onClose, className: "text-gray-500 hover:bg-white/5 focus:outline-none p-2 rounded", children: /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sidenav.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("nav", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV3("ul", { className: "flex flex-col hover:cursor-pointer mr-8 ml-3", children: [
        /* @__PURE__ */ jsxDEV3("li", { className: "hover:rounded hover:bg-white/5 py-2 px-3", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", onClick: handleLinkClick, children: "Home" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/services", onClick: handleLinkClick, children: "Services" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/work", onClick: handleLinkClick, children: "Portfolio" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/careers", onClick: handleLinkClick, children: "Careers" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/about", onClick: handleLinkClick, children: "About" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/contact", onClick: handleLinkClick, children: "Contact" }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidenav.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sidenav.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidenav.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sidenav.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sidenav.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}, Sidenav_default = Sidenav;

// app/components/Navbar.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Navbar = () => {
  let [isSidenavOpen, setIsSidenavOpen] = useState2(!1);
  return /* @__PURE__ */ jsxDEV4("nav", { className: "sticky bg-black text-white top-0 left-0 right-0 z-50 flex justify-between items-center px-12 p-4 text-sm font-bold", children: [
    /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "sm:text-sm", children: /* @__PURE__ */ jsxDEV4("span", { className: "inline ", children: "Eastern Lubrication Systems" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "hidden lg:inline", children: /* @__PURE__ */ jsxDEV4("ul", { className: "flex justify-center hover:cursor-pointer", children: [
      /* @__PURE__ */ jsxDEV4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/services", children: "Services" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/work", children: "Portfolio" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/careers", children: "Careers" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/about", children: "About" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "py-1 px-3 hover:rounded hover:bg-white/10", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/contact", children: "Contact" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 45,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxDEV4(
      "button",
      {
        className: "inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-white/10 shadow-sm hover:bg-white/20",
        onClick: () => {
          setIsSidenavOpen(!isSidenavOpen);
        },
        children: "Menu"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 51,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4(Sidenav_default, { isOpen: isSidenavOpen, onClose: () => {
      setIsSidenavOpen(!1);
    } }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}, Navbar_default = Navbar;

// app/components/Footer.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV5("footer", { className: "bg-black text-white py-10", children: /* @__PURE__ */ jsxDEV5("div", { className: "container mx-auto text-center", children: [
  /* @__PURE__ */ jsxDEV5("div", { className: "text-xl font-bold mb-6", children: "Eastern Lubrication Systems" }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV5("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV5("a", { href: "mailto:contact@example.com", className: "text-lg hover:underline", children: "sales@eastlube.com" }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV5("div", { className: "text-sm", children: [
    "\xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Eastern Lubrication Systems. All Rights Reserved."
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), Footer_default = Footer;

// app/components/Header.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Header = ({ title, description, children }) => /* @__PURE__ */ jsxDEV6("div", { className: "bg-black w-full p-8 border-b", children: [
  /* @__PURE__ */ jsxDEV6("div", { className: "text-white text-left mb-8 mx-2 md:mx-16 lg:mx-32 mt-12", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl font-bold", children: title }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { className: "mt-12 md:pr-12", children: description }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  children
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this), Header_default = Header;

// app/components/ServiceSection.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

// app/lib/services.ts
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
];

// app/components/ServiceSection.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var ServiceSection = () => /* @__PURE__ */ jsxDEV7("div", { className: "bg-black bg-opacity-90 w-full p-8 border-b", children: /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white", children: services.map((service) => /* @__PURE__ */ jsxDEV7("div", { className: "p-4 flex items-center md:mx-12", children: [
  /* @__PURE__ */ jsxDEV7("div", { className: "mr-4 w-16 h-16 flex-shrink-0", children: /* @__PURE__ */ jsxDEV7(FontAwesomeIcon, { icon: faCube }, void 0, !1, {
    fileName: "app/components/ServiceSection.tsx",
    lineNumber: 13,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "app/components/ServiceSection.tsx",
    lineNumber: 12,
    columnNumber: 25
  }, this),
  /* @__PURE__ */ jsxDEV7("div", { className: "flex-grow-1", children: [
    /* @__PURE__ */ jsxDEV7("h2", { className: "text-lg font-semibold text-cyan-300", children: service.title }, void 0, !1, {
      fileName: "app/components/ServiceSection.tsx",
      lineNumber: 17,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "mt-2", children: service.description }, void 0, !1, {
      fileName: "app/components/ServiceSection.tsx",
      lineNumber: 18,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ServiceSection.tsx",
    lineNumber: 16,
    columnNumber: 25
  }, this)
] }, service.id, !0, {
  fileName: "app/components/ServiceSection.tsx",
  lineNumber: 11,
  columnNumber: 21
}, this)) }, void 0, !1, {
  fileName: "app/components/ServiceSection.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/ServiceSection.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), ServiceSection_default = ServiceSection;

// app/components/Testimonials.tsx
import { useState as useState3, useEffect as useEffect2, useRef } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var TestimonialCarousel = ({ testimonials: testimonials2 }) => {
  let [currentTestimonialIndex, setCurrentTestimonialIndex] = useState3(0), [autoPlay, setAutoPlay] = useState3(!0), [isHovered, setIsHovered] = useState3(!1), carouselRef = useRef(null), changeTestimonial = (newIndex) => {
    setCurrentTestimonialIndex(newIndex);
  };
  useEffect2(() => {
    let interval;
    return autoPlay && !isHovered && (interval = setInterval(() => {
      changeTestimonial((currentTestimonialIndex + 1) % testimonials2.length);
    }, 4e3)), () => clearInterval(interval);
  }, [autoPlay, isHovered, currentTestimonialIndex]);
  let nextTestimonial = () => {
    changeTestimonial((currentTestimonialIndex + 1) % testimonials2.length);
  }, prevTestimonial = () => {
    changeTestimonial((currentTestimonialIndex - 1 + testimonials2.length) % testimonials2.length);
  }, handleMouseEnter = () => {
    setIsHovered(!0);
  }, handleMouseLeave = () => {
    setIsHovered(!1);
  }, handleDotClick = (index) => {
    setCurrentTestimonialIndex(index);
  };
  return /* @__PURE__ */ jsxDEV8(
    "div",
    {
      className: "bg-black w-full p-8 text-white overflow-hidden",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: /* @__PURE__ */ jsxDEV8("div", { className: "max-w-4xl mx-auto relative container p-4 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV8("h1", { className: "text-4xl text-white mb-16 text-center", children: "Featured Clients" }, void 0, !1, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "relative", ref: carouselRef, children: [
          /* @__PURE__ */ jsxDEV8(
            "button",
            {
              className: "absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2",
              onClick: prevTestimonial,
              children: /* @__PURE__ */ jsxDEV8(FontAwesomeIcon2, { icon: faChevronLeft }, void 0, !1, {
                fileName: "app/components/Testimonials.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Testimonials.tsx",
              lineNumber: 70,
              columnNumber: 11
            },
            this
          ),
          testimonials2.map((testimonial, index) => /* @__PURE__ */ jsxDEV8(
            "div",
            {
              className: `testimonial-slide ${index === currentTestimonialIndex ? "opacity-100" : "opacity-0 hidden"} transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center`,
              children: [
                /* @__PURE__ */ jsxDEV8("div", { className: "w-48 h-48 md:w-60 md:h-60 mx-auto mb-4 relative overflow-hidden rounded-full", children: /* @__PURE__ */ jsxDEV8(
                  "img",
                  {
                    src: testimonial.image,
                    alt: testimonial.name,
                    className: "w-full h-full object-cover rounded-full"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Testimonials.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 87,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV8("div", { className: "text-xl md:text-2xl font-medium text-center", children: testimonial.name }, void 0, !1, {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 96,
                  columnNumber: 15
                }, this)
              ]
            },
            testimonial.id,
            !0,
            {
              fileName: "app/components/Testimonials.tsx",
              lineNumber: 79,
              columnNumber: 13
            },
            this
          )),
          /* @__PURE__ */ jsxDEV8(
            "button",
            {
              className: "absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2",
              onClick: nextTestimonial,
              children: /* @__PURE__ */ jsxDEV8(FontAwesomeIcon2, { icon: faChevronRight }, void 0, !1, {
                fileName: "app/components/Testimonials.tsx",
                lineNumber: 107,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Testimonials.tsx",
              lineNumber: 103,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center mt-10", children: testimonials2.map((_, index) => /* @__PURE__ */ jsxDEV8(
          "div",
          {
            onClick: () => handleDotClick(index),
            className: `w-2 h-2 rounded-full bg-zinc-600 ${currentTestimonialIndex % testimonials2.length === index ? "opacity-100" : "opacity-50"} mx-1 cursor-pointer`
          },
          index,
          !1,
          {
            fileName: "app/components/Testimonials.tsx",
            lineNumber: 114,
            columnNumber: 13
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Testimonials.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Testimonials.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}, Testimonials_default = TestimonialCarousel;

// app/lib/testimonials.ts
var testimonials = [
  {
    id: 1,
    name: "Carter Machinery",
    image: "images/carter.jpeg"
  },
  {
    id: 2,
    name: "Harbour Group Management",
    image: "images/hgliving.jpg"
  },
  {
    id: 3,
    name: "The Heritage Group Accelerator",
    image: "images/hga.png"
  },
  {
    id: 4,
    name: "United Parcel Service",
    image: "images/ups.png"
  },
  {
    id: 5,
    name: "PPC Lubricants",
    image: "images/ppc.png"
  },
  {
    id: 6,
    name: "Anne Arundel County",
    image: "images/annearundel.png"
  },
  {
    id: 7,
    name: "PWI Inc.",
    image: "images/pwi.png"
  },
  {
    id: 8,
    name: "Ryder",
    image: "images/ryder.png"
  },
  {
    id: 9,
    name: "Synagro",
    image: "images/synagro.png"
  },
  {
    id: 10,
    name: "Reliable Contracting Company",
    image: "images/reliable.png"
  }
  // Add more testimonials as needed
];

// app/routes/services.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Services | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Services() {
  return /* @__PURE__ */ jsxDEV9("main", { children: [
    /* @__PURE__ */ jsxDEV9(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/services.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9(
      "div",
      {
        className: "bg-cover bg-center h-max relative",
        style: {
          backgroundImage: 'url("images/oil-dispensing-station.jpeg")'
        },
        children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "md:p-12 lg:p-36", children: [
            /* @__PURE__ */ jsxDEV9(
              Header_default,
              {
                title: "Our Services",
                description: "As a full line service company, we have every component neccesary for an effective lubrication system. We also perform installation and service making us the complete solution for all your needs."
              },
              void 0,
              !1,
              {
                fileName: "app/routes/services.tsx",
                lineNumber: 30,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9(ServiceSection_default, {}, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV9(Testimonials_default, { testimonials }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9(Footer_default, {}, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/services.tsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/services.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

// app/routes/careers.tsx
var careers_exports = {};
__export(careers_exports, {
  default: () => Careers,
  meta: () => meta2
});

// app/components/ImageSection.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var ImageSection = () => /* @__PURE__ */ jsxDEV10("section", { className: "bg-zinc-950 text-white pt-4 pb-8", children: /* @__PURE__ */ jsxDEV10("div", { className: "mx-auto", children: [
  /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-0 md:px-12 lg:px-24 pt-2", children: [
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
  ].map((image, index) => /* @__PURE__ */ jsxDEV10("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV10(
    "div",
    {
      className: "image-container",
      style: {
        height: "300px",
        // Set your desired fixed height here
        overflow: "hidden"
      },
      children: /* @__PURE__ */ jsxDEV10(
        "img",
        {
          src: image.src,
          alt: image.description,
          className: "w-full h-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ImageSection.tsx",
          lineNumber: 32,
          columnNumber: 17
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ImageSection.tsx",
      lineNumber: 25,
      columnNumber: 15
    },
    this
  ) }, index, !1, {
    fileName: "app/components/ImageSection.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/ImageSection.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV10("p", { className: "mt-4 text-justify px-8 md:px-12 lg:px-24 py-4", children: "At Eastern Lubrication Systems, our tight-knit team embodies collaboration, innovation, and excellence. We're united by a shared commitment to delivering exceptional service to our clients. Join us in a dynamic work culture that values your contributions and fosters professional growth." }, void 0, !1, {
    fileName: "app/components/ImageSection.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ImageSection.tsx",
  lineNumber: 21,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ImageSection.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this), ImageSection_default = ImageSection;

// app/components/CareersSections.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var CareersSection = () => /* @__PURE__ */ jsxDEV11("section", { className: "bg-black text-white pt-24 pb-12", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-6xl mx-auto", children: [
  /* @__PURE__ */ jsxDEV11("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Careers" }, void 0, !1, {
    fileName: "app/components/CareersSections.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-1 lg:grid-cols-1 gap-8 mx-3 lg:mx-0", children: [
    {
      title: "Secretary",
      subtitle: "Administrative Support",
      description: "Responsible for administrative support, managing correspondence, scheduling appointments, and maintaining efficient office operations.",
      imageSrc: "images/oil-dispensing-station.jpeg",
      tags: ["Administrative", "Secretarial"]
    },
    {
      title: "Lubrication Technician",
      subtitle: "Automotive Services",
      description: "Skilled in the installation, maintenance, and servicing of automotive lubrication systems, ensuring optimal performance and customer satisfaction.",
      imageSrc: "images/lub.png",
      tags: ["Automotive", "Technician"]
    },
    {
      title: "Inventory Control Specialist",
      subtitle: "Resource Management",
      description: "Manages and optimizes fluid inventory, ensuring the availability of essential resources and minimizing waste within the company's operations.",
      imageSrc: "images/outside-pump.jpg",
      tags: ["Inventory Control", "Resource Management"]
    }
  ].map((position, index) => /* @__PURE__ */ jsxDEV11(
    "div",
    {
      className: "flex flex-col md:flex-row bg-black border-gray-500 border p-6 rounded shadow-md sm:mx-3 transition-all duration-300 hover:border-white hover:shadow-lg cursor-pointer",
      onClick: () => {
      },
      children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "md:w-1/4 md:pr-6 mb-4 md:mb-0", children: /* @__PURE__ */ jsxDEV11("div", { className: "h-48 overflow-hidden rounded", children: /* @__PURE__ */ jsxDEV11(
          "img",
          {
            src: position.imageSrc,
            alt: position.title,
            className: "w-full h-full object-cover"
          },
          void 0,
          !1,
          {
            fileName: "app/components/CareersSections.tsx",
            lineNumber: 44,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/CareersSections.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/CareersSections.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "md:w-3/4 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("h3", { className: "text-xl font-semibold mb-2", children: position.title }, void 0, !1, {
              fileName: "app/components/CareersSections.tsx",
              lineNumber: 53,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-md text-gray-600 mb-2", children: position.subtitle }, void 0, !1, {
              fileName: "app/components/CareersSections.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-sm mb-4", children: position.description }, void 0, !1, {
              fileName: "app/components/CareersSections.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CareersSections.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-wrap mt-4", children: position.tags.map((tag, tagIndex) => /* @__PURE__ */ jsxDEV11(
            "span",
            {
              className: "bg-gray-300 text-gray-800 rounded-md px-2 py-1 text-sm mr-2 mb-2",
              children: tag
            },
            tagIndex,
            !1,
            {
              fileName: "app/components/CareersSections.tsx",
              lineNumber: 61,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/CareersSections.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CareersSections.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ]
    },
    index,
    !0,
    {
      fileName: "app/components/CareersSections.tsx",
      lineNumber: 37,
      columnNumber: 13
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/CareersSections.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/CareersSections.tsx",
  lineNumber: 33,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/CareersSections.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this), CareersSections_default = CareersSection;

// app/routes/careers.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Careers | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Careers() {
  return /* @__PURE__ */ jsxDEV12("main", { children: [
    /* @__PURE__ */ jsxDEV12(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(Header_default, { title: "Work with us", description: "Think about our service centers as a pit stop for your lubrication equipment. Our skilled technicians are ready to provide fast and efficient installation, maintanance, and repair services for all your lubrication needs. Whether you need a quick tune-up or a major overhaul, our service centers are equipped with the lastest technology and tools to get you back on the road to success." }, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(ImageSection_default, {}, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex h-[70vh] bg-black", children: /* @__PURE__ */ jsxDEV12(
      "img",
      {
        src: "images/entrance.png",
        alt: "Background",
        className: "h-full w-full object-cover md:px-3 lg:px-6"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/careers.tsx",
        lineNumber: 25,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(CareersSections_default, {}, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/careers.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/careers.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  meta: () => meta3
});

// app/components/ContactForm.tsx
import { useState as useState4 } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var ContactForm = () => {
  let [isModalOpen, setIsModalOpen] = useState4(!1), {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm();
  async function onSubmit(formData) {
    await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify({
        name: formData.name,
        address: formData.address,
        zipCode: formData.zipCode,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      })
    }).then(() => {
      toast.success("Your email message has been sent successfully"), setIsModalOpen(!0);
    }), reset();
  }
  return /* @__PURE__ */ jsxDEV13("div", { className: "bg-zinc-950 text-white pt-24 pb-6 md:px-12 px-6", children: [
    isModalOpen && /* @__PURE__ */ jsxDEV13("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "absolute inset-0 bg-black opacity-50" }, void 0, !1, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "bg-black rounded-md shadow-md z-50 border-2 border-white", children: /* @__PURE__ */ jsxDEV13("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold mb-4", children: "Success!" }, void 0, !1, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "mb-4", children: "Your email message has been sent successfully." }, void 0, !1, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV13(
          "button",
          {
            onClick: () => setIsModalOpen(!1),
            className: "bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full block mx-auto",
            children: "Close"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 60,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV13("div", { children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-4xl font-bold mb-4", children: "Contact" }, void 0, !1, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "text-base mb-8 mr-20", children: "Come visit our service centers and experience the power of expert lubrication support!" }, void 0, !1, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold", children: "Address" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 77,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: "512 N. Crain Highway, Suite #13" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 78,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: "Glen Burnie, MD 21061" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 79,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 76,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold", children: "Email" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 82,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("a", { href: "mailto:sales@eastlube.com", className: "text-lg hover:underline", children: "sales@eastlube.com" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 83,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold", children: "Phone" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 88,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: "+1 833-880-PUMP (7867)" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 89,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 87,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { children: [
          /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold", children: "Hours" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 92,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: "Monday - Friday: 7:30 AM - 4:00 PM" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { children: "Saturday - Sunday: Closed" }, void 0, !1, {
            fileName: "app/components/ContactForm.tsx",
            lineNumber: 94,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { children: /* @__PURE__ */ jsxDEV13(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV13("label", { htmlFor: "name", className: "block text-base font-thin mb-1", children: "Name" }, void 0, !1, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 103,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "input",
                {
                  required: !0,
                  type: "text",
                  id: "name",
                  placeholder: "Enter your name",
                  className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                  ...register("name")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 106,
                  columnNumber: 33
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 102,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4 flex", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "mr-2 w-full", children: [
                /* @__PURE__ */ jsxDEV13("label", { htmlFor: "address", className: "block text-base font-thin mb-1", children: "Address" }, void 0, !1, {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 117,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV13(
                  "input",
                  {
                    type: "text",
                    id: "address",
                    placeholder: "Enter your address",
                    className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                    ...register("address")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ContactForm.tsx",
                    lineNumber: 120,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 116,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV13("label", { htmlFor: "zipCode", className: "block text-base font-thin mb-1", children: "ZIP Code" }, void 0, !1, {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 129,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV13(
                  "input",
                  {
                    type: "text",
                    id: "zipCode",
                    placeholder: "Enter your ZIP code",
                    className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                    ...register("zipCode")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ContactForm.tsx",
                    lineNumber: 132,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 128,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4 flex", children: [
              " ",
              /* @__PURE__ */ jsxDEV13("div", { className: "mr-2 w-full", children: [
                /* @__PURE__ */ jsxDEV13("label", { htmlFor: "email", className: "block text-base font-thin mb-1", children: "Email" }, void 0, !1, {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 144,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV13(
                  "input",
                  {
                    required: !0,
                    type: "email",
                    id: "email",
                    placeholder: "Enter your email",
                    className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                    ...register("email")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ContactForm.tsx",
                    lineNumber: 147,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 143,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxDEV13("label", { htmlFor: "phone", className: "block text-base font-thin mb-1", children: "Phone" }, void 0, !1, {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 157,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV13(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    placeholder: "Enter your phone number",
                    className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                    ...register("phone")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ContactForm.tsx",
                    lineNumber: 160,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 156,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 142,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV13("label", { htmlFor: "subject", className: "block text-base font-thin mb-1", children: "Subject" }, void 0, !1, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 170,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "input",
                {
                  type: "text",
                  id: "subject",
                  placeholder: "Enter the subject",
                  className: "w-full border border-white rounded-md py-2 px-3 text-white bg-transparent",
                  ...register("subject")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 173,
                  columnNumber: 33
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 169,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV13("label", { htmlFor: "message", className: "block text-base font-thin mb-1", children: "Message" }, void 0, !1, {
                fileName: "app/components/ContactForm.tsx",
                lineNumber: 182,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "textarea",
                {
                  id: "message",
                  placeholder: "Write your message here ...",
                  className: "w-full border border-white rounded-md py-3 px-3 text-white bg-transparent",
                  ...register("message")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 185,
                  columnNumber: 33
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 181,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "mb-4 flex justify-center", children: [
              " ",
              /* @__PURE__ */ jsxDEV13(
                "button",
                {
                  disabled: isSubmitting,
                  type: "submit",
                  className: "bg-white text-black border border-black rounded-md py-2 px-6 hover:bg-zinc-300",
                  children: "Send"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ContactForm.tsx",
                  lineNumber: 193,
                  columnNumber: 33
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/ContactForm.tsx",
              lineNumber: 192,
              columnNumber: 29
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ContactForm.tsx",
          lineNumber: 100,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ContactForm.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/ContactForm.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ContactForm.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
}, ContactForm_default = ContactForm;

// app/components/Map.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Map = () => /* @__PURE__ */ jsxDEV14("section", { className: "w-full h-[60vh]", children: /* @__PURE__ */ jsxDEV14(
  "iframe",
  {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12372.373576009162!2d-76.6217315!3d39.1725975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fd22320bc205%3A0x1898610d91b6621e!2sEastern%20Lubrication%20Systems!5e0!3m2!1sen!2sco!4v1695784779300!5m2!1sen!2sco",
    width: "100%",
    height: "100%",
    style: { border: "1" },
    allowFullScreen: !0,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Map.tsx",
    lineNumber: 10,
    columnNumber: 13
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Map.tsx",
  lineNumber: 9,
  columnNumber: 9
}, this), Map_default = Map;

// app/routes/contact.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Contact | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Contact() {
  return /* @__PURE__ */ jsxDEV15("main", { children: [
    /* @__PURE__ */ jsxDEV15(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(ContactForm_default, {}, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(Map_default, {}, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV15(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});

// app/components/Welcome.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var SplitScreen = () => /* @__PURE__ */ jsxDEV16("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex-1 relative text-center", children: [
  /* @__PURE__ */ jsxDEV16(
    "img",
    {
      src: "images/installations.jpg",
      alt: "Background",
      className: "h-full w-full object-cover"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Welcome.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ jsxDEV16("div", { className: "absolute top-0 left-0 h-full w-full bg-black opacity-50" }, void 0, !1, {
    fileName: "app/components/Welcome.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV16("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white", children: [
    /* @__PURE__ */ jsxDEV16("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6", children: "Keeping your business moving" }, void 0, !1, {
      fileName: "app/components/Welcome.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { className: "text-base md:text-lg lg:text-xl mb-8", children: "Experience the power and performance of a good lubrication system" }, void 0, !1, {
      fileName: "app/components/Welcome.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Welcome.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Welcome.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Welcome.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Welcome_default = SplitScreen;

// app/components/AboutSection.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var AboutSection = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return Math.floor(years2 / 5) * 5;
  })(1992);
  return /* @__PURE__ */ jsxDEV17("section", { className: "bg-black text-white pt-14 pb-6", children: /* @__PURE__ */ jsxDEV17("div", { className: "container mx-auto text-justify", children: [
    /* @__PURE__ */ jsxDEV17("h2", { className: "text-3xl font-bold mb-8 text-center", children: "About our business" }, void 0, !1, {
      fileName: "app/components/AboutSection.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17("p", { className: "text-base mb-4 mx-8 md:mx-24 ", children: [
      "Eastern Lubrication System is a company with more than ",
      years,
      " years of experience in providing services in the lubrication equipment."
    ] }, void 0, !0, {
      fileName: "app/components/AboutSection.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17("p", { className: "text-base pb-16 mx-8 md:mx-24", children: "We offer competitive pricing and represent the most trusted names in the business: Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more." }, void 0, !1, {
      fileName: "app/components/AboutSection.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AboutSection.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/AboutSection.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, AboutSection_default = AboutSection;

// app/components/Features.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var Features = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return `${Math.floor(years2 / 5) * 5}+`;
  })(1992);
  return /* @__PURE__ */ jsxDEV18("section", { className: "bg-black text-white py-12", children: /* @__PURE__ */ jsxDEV18("div", { className: "container mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV18("h2", { className: "text-4xl font-bold mb-12", children: "Features" }, void 0, !1, {
      fileName: "app/components/Features.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-wrap justify-center", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxDEV18("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "1" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 22,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-lg", children: [
          years,
          " Years of Experience"
        ] }, void 0, !0, {
          fileName: "app/components/Features.tsx",
          lineNumber: 23,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Features.tsx",
        lineNumber: 21,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Features.tsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxDEV18("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "2" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 30,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-lg", children: "Quality Assurance" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 31,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Features.tsx",
        lineNumber: 29,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Features.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxDEV18("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "3" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-lg", children: "Advanced Tech" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 39,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Features.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Features.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxDEV18("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "4" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 46,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-lg", children: "Licensed Professionals" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 47,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Features.tsx",
        lineNumber: 45,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Features.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-1/2 sm:w-1/3 md:w-1/5 mb-4 md:mb-0 relative", children: /* @__PURE__ */ jsxDEV18("div", { className: "rounded-lg bg-black border-b-4 border-white p-4 h-36 text-center", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "text-cyan-500 text-3xl font-bold mb-2", children: "5" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-lg", children: "24/7 Support" }, void 0, !1, {
          fileName: "app/components/Features.tsx",
          lineNumber: 55,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Features.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/Features.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Features.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Features.tsx",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Features.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}, Features_default = Features;

// app/components/Gallery.tsx
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState as useState5, useEffect as useEffect3 } from "react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var GallerySection = () => {
  let [scrollIndex, setScrollIndex] = useState5(0), [isSmallScreen, setIsSmallScreen] = useState5(!1), itemsPerPage = isSmallScreen ? 2 : 3, images = [
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
      src: "images/service-center.png",
      title: "Service Center",
      description: "Description 5"
    },
    {
      id: 6,
      src: "images/pumps.png",
      title: "Pumps",
      description: "Description 6"
    }
  ];
  useEffect3(() => {
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
  return /* @__PURE__ */ jsxDEV19("section", { className: "bg-zinc-950 text-white py-12", children: /* @__PURE__ */ jsxDEV19("div", { className: "container mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV19("h2", { className: "text-4xl font-bold mb-8", children: "Our Collections" }, void 0, !1, {
      fileName: "app/components/Gallery.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxDEV19("div", { className: "flex items-center text-black", children: [
      scrollIndex > 0 && /* @__PURE__ */ jsxDEV19("button", { className: "absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 left-3", onClick: handlePrev, children: /* @__PURE__ */ jsxDEV19(FontAwesomeIcon3, { icon: faArrowLeft }, void 0, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 80,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 79,
        columnNumber: 29
      }, this),
      scrollIndex + itemsPerPage < images.length && /* @__PURE__ */ jsxDEV19("button", { className: "rounded-sm absolute top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 p-3 px-4 right-3", onClick: handleNext, children: /* @__PURE__ */ jsxDEV19(FontAwesomeIcon3, { icon: faArrowRight }, void 0, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 85,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 84,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "flex", style: { width: `${100 * (images.length / itemsPerPage)}%` }, children: images.slice(scrollIndex, scrollIndex + itemsPerPage).map((image) => /* @__PURE__ */ jsxDEV19("div", { className: "gallery-item relative mx-2 group", style: { width: `${100 / itemsPerPage}%` }, children: /* @__PURE__ */ jsxDEV19("div", { className: "gallery-image-container relative min-h-[300px] pb-[150%]", children: [
        /* @__PURE__ */ jsxDEV19(
          "img",
          {
            src: image.src,
            alt: image.title,
            className: "gallery-image object-cover transition-transform hover:scale-105 hover:brightness-50",
            style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Gallery.tsx",
            lineNumber: 93,
            columnNumber: 41
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19("div", { className: "gallery-info absolute bottom-0 left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100", children: [
          /* @__PURE__ */ jsxDEV19("h3", { className: "text-lg font-bold", children: image.title }, void 0, !1, {
            fileName: "app/components/Gallery.tsx",
            lineNumber: 100,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-xs", children: image.description }, void 0, !1, {
            fileName: "app/components/Gallery.tsx",
            lineNumber: 101,
            columnNumber: 45
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Gallery.tsx",
          lineNumber: 99,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 91,
        columnNumber: 37
      }, this) }, image.id, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 90,
        columnNumber: 33
      }, this)) }, void 0, !1, {
        fileName: "app/components/Gallery.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Gallery.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Gallery.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Gallery.tsx",
    lineNumber: 74,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Gallery.tsx",
    lineNumber: 73,
    columnNumber: 9
  }, this);
}, Gallery_default = GallerySection;

// app/components/LocationInfo.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var LocationInfo = () => /* @__PURE__ */ jsxDEV20("section", { className: "bg-black py-28 text-white", children: /* @__PURE__ */ jsxDEV20("div", { className: "container mx-auto flex flex-col md:flex-row items-center justify-center", children: [
  /* @__PURE__ */ jsxDEV20("div", { className: "md:w-1/2 text-center md:text-left", children: /* @__PURE__ */ jsxDEV20("h2", { className: "font-bold text-3xl md:text-4xl lg:text-5xl", children: "Our Locations" }, void 0, !1, {
    fileName: "app/components/LocationInfo.tsx",
    lineNumber: 12,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationInfo.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "md:w-1/2 mt-6 md:mt-0", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "text-lg mb-4", children: "512 N. Crain Highway, Suite #13 Glen Burnie, MD 21061" }, void 0, !1, {
      fileName: "app/components/LocationInfo.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV20("p", { className: "text-lg", children: [
      /* @__PURE__ */ jsxDEV20("a", { href: "mailto:contact@example.com", className: "text-lg hover:underline", children: "sales@eastlube.com" }, void 0, !1, {
        fileName: "app/components/LocationInfo.tsx",
        lineNumber: 21,
        columnNumber: 25
      }, this),
      " | Phone: +1 833-880-PUMP (7867)"
    ] }, void 0, !0, {
      fileName: "app/components/LocationInfo.tsx",
      lineNumber: 20,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LocationInfo.tsx",
    lineNumber: 16,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/LocationInfo.tsx",
  lineNumber: 9,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/LocationInfo.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this), LocationInfo_default = LocationInfo;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Eastern Lubrication Systems | Keeping your business moving" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV21("main", { children: [
    /* @__PURE__ */ jsxDEV21(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Welcome_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(AboutSection_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "flex h-[80vh]", children: /* @__PURE__ */ jsxDEV21(
      "img",
      {
        src: "images/outside-pump.jpg",
        alt: "Background",
        className: "h-full w-full object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Features_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Gallery_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "flex h-[70vh]", children: /* @__PURE__ */ jsxDEV21(
      "img",
      {
        src: "images/tubes.png",
        alt: "Background",
        className: "h-full w-full object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(LocationInfo_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Map_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta5
});

// app/components/AboutUs.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var AboutUsSection = () => {
  let years = ((startYear) => {
    let years2 = (/* @__PURE__ */ new Date()).getFullYear() - startYear;
    return Math.floor(years2 / 5) * 5;
  })(1992);
  return /* @__PURE__ */ jsxDEV22("section", { className: "bg-black text-white py-20 text-center", children: [
    /* @__PURE__ */ jsxDEV22("h3", { className: "text-lg text-gray-500", children: "Our History" }, void 0, !1, {
      fileName: "app/components/AboutUs.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("h2", { className: "text-4xl font-bold mb-4", children: "About Us" }, void 0, !1, {
      fileName: "app/components/AboutUs.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("p", { className: "text-lg max-w-3xl mx-12 md:mx-auto text-justify", children: [
      /* @__PURE__ */ jsxDEV22("b", { children: "Eastern Lubrication System" }, void 0, !1, {
        fileName: "app/components/AboutUs.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      " is a company with more than ",
      years,
      " of experience in providing services in the lubrication equipment.",
      /* @__PURE__ */ jsxDEV22("br", {}, void 0, !1, {
        fileName: "app/components/AboutUs.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      "We offer competitive pricing and represent the most trusted names in the business: Graco, Balcrank, Lincoln, Reelcraft, Hannay and many more."
    ] }, void 0, !0, {
      fileName: "app/components/AboutUs.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AboutUs.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}, AboutUs_default = AboutUsSection;

// app/components/MissionVision.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var MissionVision = () => /* @__PURE__ */ jsxDEV23("section", { className: "border-y bg-black text-center", children: [
  /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxDEV23("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxDEV23(
      "img",
      {
        src: "images/small-overhead-reels.jpg",
        alt: "Image 1",
        className: "w-full h-auto"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 10,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/MissionVision.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "md:w-1/2 bg-black text-white py-6 px-8 my-auto", children: [
      /* @__PURE__ */ jsxDEV23("h2", { className: "text-4xl font-bold mb-4 text-cyan-300", children: "Mission" }, void 0, !1, {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV23("p", { className: "text-lg text-justify px-8", children: [
        "To be one of the best companies in the automotive area,",
        "which provides our customers with the most optimal solutions according to their needs in terms of price, quality and service."
      ] }, void 0, !0, {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MissionVision.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MissionVision.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxDEV23("div", { className: "md:w-1/2 bg-black text-white py-6 px-8 my-auto", children: [
      /* @__PURE__ */ jsxDEV23("h2", { className: "text-4xl font-bold mb-4 text-cyan-300", children: "Vision" }, void 0, !1, {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV23("p", { className: "text-lg text-justify px-8", children: "To be the leading provider of innovative lubrication technology, setting industry standards for reliability and service. We aspire to continuously evolve, adapting to the changing needs of our clients and the world, while contributing to a greener, more efficient future." }, void 0, !1, {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MissionVision.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxDEV23(
      "img",
      {
        src: "images/reels-place.jpg",
        alt: "Image 2",
        className: "w-full h-full object-cover"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MissionVision.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/MissionVision.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MissionVision.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/MissionVision.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), MissionVision_default = MissionVision;

// app/routes/about.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "About Us | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function About() {
  return /* @__PURE__ */ jsxDEV24("main", { children: [
    /* @__PURE__ */ jsxDEV24(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24(AboutUs_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24(MissionVision_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/send.ts
var send_exports = {};
__export(send_exports, {
  action: () => action
});
import { json } from "@remix-run/node";
import { Resend } from "resend";

// app/components/EmailMessage.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var EmailMessage = ({ name, address, zipCode, email, phone, subject, message }) => /* @__PURE__ */ jsxDEV25("div", { className: "bg-white shadow-md rounded-md p-4", children: [
  /* @__PURE__ */ jsxDEV25("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxDEV25("h2", { className: "text-xl font-bold", children: subject }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV25("p", { children: message }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EmailMessage.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV25("div", { className: "border-t border-gray-300 mt-12", children: [
    /* @__PURE__ */ jsxDEV25("h3", { className: "text-lg font-bold mb-2", children: "Contact Information" }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV25("p", { className: "mb-1 font-medium font-bold text-lg", children: name }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV25("p", { className: "mb-1 text-sm text-gray-600 italic", children: [
      address,
      " - ",
      zipCode
    ] }, void 0, !0, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV25("p", { className: "mb-1 text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV25("a", { href: `mailto:${email}`, children: email }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 26,
      columnNumber: 59
    }, this) }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV25("p", { className: "mb-1 text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV25("a", { href: `tel:${phone}`, children: phone }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 27,
      columnNumber: 59
    }, this) }, void 0, !1, {
      fileName: "app/components/EmailMessage.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EmailMessage.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/EmailMessage.tsx",
  lineNumber: 17,
  columnNumber: 9
}, this), EmailMessage_default = EmailMessage;

// app/routes/send.ts
var resend = new Resend(process.env.RESEND_API_KEY), action = async ({ request }) => {
  if (request.method === "POST") {
    let formData = new URLSearchParams(await request.text()), message = JSON.parse(Object.keys(Object.fromEntries(formData.entries()))[0]), { data, error } = await resend.emails.send({
      from: "Eastlube Website <sales@eastlube.com>",
      to: ["sales@eastlube.com"],
      subject: `${message.name} needs info about ${message.subject} - Eastlube website`,
      react: EmailMessage_default({
        name: message.name,
        address: message.address,
        zipCode: message.zipCode,
        email: message.email,
        phone: message.phone,
        subject: message.subject,
        message: message.message
      })
    });
    return error ? json({ error }, 400) : json(data, 200);
  }
  return json({ error: "Method not allowed" }, 405);
};

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Portfolio,
  meta: () => meta6
});

// app/components/Collection.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var Collection = () => /* @__PURE__ */ jsxDEV26("div", { className: "bg-black p-4 md:p-14", children: /* @__PURE__ */ jsxDEV26("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV26("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
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
].map((image, index) => /* @__PURE__ */ jsxDEV26("div", { className: "w-full relative aspect-ratio-1/1 group", children: [
  /* @__PURE__ */ jsxDEV26("img", { src: image.src, alt: `Image ${index}`, className: "w-full h-full object-cover hover:brightness-50" }, void 0, !1, {
    fileName: "app/components/Collection.tsx",
    lineNumber: 50,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV26("div", { className: "gallery-info absolute top-[50%] left-0 right-0 text-white p-2 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxDEV26("h3", { className: "text-lg font-bold", children: image.title }, void 0, !1, {
      fileName: "app/components/Collection.tsx",
      lineNumber: 52,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ jsxDEV26("p", { className: "text-xs", children: image.description }, void 0, !1, {
      fileName: "app/components/Collection.tsx",
      lineNumber: 53,
      columnNumber: 33
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Collection.tsx",
    lineNumber: 51,
    columnNumber: 29
  }, this)
] }, index, !0, {
  fileName: "app/components/Collection.tsx",
  lineNumber: 49,
  columnNumber: 25
}, this)) }, void 0, !1, {
  fileName: "app/components/Collection.tsx",
  lineNumber: 47,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/Collection.tsx",
  lineNumber: 46,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Collection.tsx",
  lineNumber: 45,
  columnNumber: 9
}, this), Collection_default = Collection;

// app/components/DownloadButton.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var DownloadButton = () => /* @__PURE__ */ jsxDEV27("div", { className: "w-56 sm:w-64 mx-2 md:pr-12 md:mx-16 lg:mx-32 text-white bg-black p-4 rounded-md border border-white hover:bg-white hover:text-black hover:border-black hover:shadow-md transition-all duration-300", children: /* @__PURE__ */ jsxDEV27("button", { onClick: () => {
  let pdfFile = "assets/services-portfolio.pdf", currentDate = /* @__PURE__ */ new Date(), filename = `eastlube-portfolio-${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}.pdf`, tempAnchor = document.createElement("a");
  tempAnchor.style.display = "none", tempAnchor.href = pdfFile, tempAnchor.setAttribute("download", filename), document.body.appendChild(tempAnchor), tempAnchor.click(), document.body.removeChild(tempAnchor);
}, children: "Download Portfolio" }, void 0, !1, {
  fileName: "app/components/DownloadButton.tsx",
  lineNumber: 30,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/DownloadButton.tsx",
  lineNumber: 29,
  columnNumber: 9
}, this), DownloadButton_default = DownloadButton;

// app/routes/work.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Portfolio | Eastlube" },
  { name: "Eastern Lubrication Systems", content: "Pumps, Reels and more!" }
];
function Portfolio() {
  return /* @__PURE__ */ jsxDEV28("main", { className: "bg-black", children: [
    /* @__PURE__ */ jsxDEV28(Navbar_default, {}, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "px-4 md:px-14 lg:px-28", children: /* @__PURE__ */ jsxDEV28(
      Header_default,
      {
        title: "Our Work",
        description: "Eastern Lubrication Systems is a distributor of oil pumps, grease pumps, hose reels, portable waste drains, diaphragm pumps, oil control handles, grease dispensers and fluid inventory control products.",
        children: /* @__PURE__ */ jsxDEV28(DownloadButton_default, {}, void 0, !1, {
          fileName: "app/routes/work.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/work.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28(Collection_default, {}, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/work.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-NEF26BM4.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-QGHGXAHV.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-3SMLWLAL.js", "/build/_shared/chunk-ZPFBG4YH.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TW3KTALZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Y72UCPXV.js", imports: ["/build/_shared/chunk-XWWTEJSG.js", "/build/_shared/chunk-M3LSD6TZ.js", "/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-HVDJB67S.js", imports: ["/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/careers": { id: "routes/careers", parentId: "root", path: "careers", index: void 0, caseSensitive: void 0, module: "/build/routes/careers-2CLXSQKB.js", imports: ["/build/_shared/chunk-65CQALOT.js", "/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-5LSHCNFX.js", imports: ["/build/_shared/chunk-M3LSD6TZ.js", "/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/send": { id: "routes/send", parentId: "root", path: "send", index: void 0, caseSensitive: void 0, module: "/build/routes/send-6ZLBSN3E.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-OQ6VD5U7.js", imports: ["/build/_shared/chunk-65CQALOT.js", "/build/_shared/chunk-XWWTEJSG.js", "/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-P5S2XBI4.js", imports: ["/build/_shared/chunk-65CQALOT.js", "/build/_shared/chunk-QIOTMQCL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "436d63e7", hmr: { runtime: "/build/_shared/chunk-ZPFBG4YH.js", timestamp: 1706909965001 }, url: "/build/manifest-436D63E7.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/send": {
    id: "routes/send",
    parentId: "root",
    path: "send",
    index: void 0,
    caseSensitive: void 0,
    module: send_exports
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
//# sourceMappingURL=index.js.map
