import stylesheet from "~/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics/>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-950 text-white font-sans">
        <div className="max-w-6xl mx-auto pt-24 text-center">
          <div className="text-4xl font-bold mb-4">Oh no! Something went wrong.</div>
          <div className="text-base mb-8">
            An unexpected error occurred. Please try again later or{" "}
            <a href="/" className="text-blue-500 hover:underline font-bold">
              return to the homepage
            </a>
            .
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
