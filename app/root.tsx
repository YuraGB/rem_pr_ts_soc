import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import stylesheet from "./tailwind.css";
import type { ReactElement } from "react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/server/auth";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: stylesheet }]),
];

export default function App(): ReactElement {
  const user = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={"min-h-screen"}>
        <NextUIProvider>
          <Outlet context={user} />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  return json(user);
}
